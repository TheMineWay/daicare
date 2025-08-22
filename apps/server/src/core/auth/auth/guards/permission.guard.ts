import { PERMISSIONS_DECORATOR_KEY } from "@core/auth/auth/decorators/permission.decorator";
import { JwtRequestUserInfo } from "@core/auth/auth/strategies/jwt.strategy";
import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
	Injectable,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import type { Permission } from "@shared/models";
import { Request } from "express";

/**
 * Permission guard that validates user permissions against endpoint requirements.
 * Checks if the authenticated user has all required permissions to access an endpoint.
 */
@Injectable()
export class PermissionsGuard implements CanActivate {
	constructor(private readonly reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
		const requiredPermissions = this.reflector.getAllAndOverride<string[]>(
			PERMISSIONS_DECORATOR_KEY,
			[context.getHandler(), context.getClass()],
		) as Permission[];
		if (!requiredPermissions || requiredPermissions.length === 0) return true;

		const request: Request = context.switchToHttp().getRequest();
		const user = request.user as JwtRequestUserInfo;

		const userPermissions: Permission[] = user.permissionInfo.permissions;
		if (!user || !userPermissions || userPermissions.length === 0) return false;

		const hasPermission = requiredPermissions.every((permission) =>
			userPermissions.includes(permission),
		);

		if (!hasPermission) {
			throw new ForbiddenException("Insufficient permissions");
		}

		return true;
	}
}
