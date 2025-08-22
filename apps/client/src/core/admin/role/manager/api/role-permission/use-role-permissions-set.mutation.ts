import { USE_ROLE_PERMISSIONS_QUERY_KEY } from "@core/admin/role/manager/api/role-permission/use-role-permissions.query";
import { useAuthenticatedRequest } from "@core/auth/session/hooks/use-authenticated-request.util";
import { endpointMutation } from "@core/requests/lib/endpoint-mutation.util";
import { ADMIN_ROLE_CONTROLLER } from "@shared/api-definition";
import type { RoleModel } from "@shared/models";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useRolePermissionsSetMutation = (roleId: RoleModel["id"]) => {
	const { request } = useAuthenticatedRequest();
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: endpointMutation(
			ADMIN_ROLE_CONTROLLER,
			"set-role-permissions",
			{
				roleId: roleId.toString(),
			},
			request,
		),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: USE_ROLE_PERMISSIONS_QUERY_KEY({ roleId }),
			});
		},
	});
};
