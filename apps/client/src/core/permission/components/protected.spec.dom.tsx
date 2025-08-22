import { Protected } from "@core/permission/components/protected";
import { Permission } from "@shared/models";
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, type Mock, vi } from "vitest";

vi.mock("@providers/auth/user-info.context", () => ({
	useUserInfo: vi.fn(),
}));

import { useUserInfo } from "@providers/auth/user-info.context";

const ALLOWED_CODE = "ALLOWED";

const renderComponent = (permissions: Permission[]) => {
	render(
		<Protected condition={{ type: "simple", permissions }}>
			<div data-testid={ALLOWED_CODE} />
		</Protected>,
	);
};

const renderWithUserPermissions = (userPermissions: Permission[]) => {
	(useUserInfo as Mock).mockReturnValue({
		permissions: [...userPermissions],
	});

	renderComponent([Permission.ADMIN]);
};

describe("<Protected/>", () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	describe("should render children when user", () => {
		it("has all required permissions", () => {
			renderWithUserPermissions([Permission.ADMIN]);
			expect(screen.queryByTestId(ALLOWED_CODE)).not.toBeNull();
		});
	});

	describe("should not render children when user", () => {
		it("does not have all required permissions", () => {
			renderWithUserPermissions([]);
			expect(screen.queryByTestId(ALLOWED_CODE)).toBeNull();
		});

		// Should be updated when there are more permissions
		it("does not have any required permissions", () => {
			renderWithUserPermissions([]);
			expect(screen.queryByTestId(ALLOWED_CODE)).toBeNull();
		});

		// Should be updated when there are more permissions
		it("has no permissions at all", () => {
			renderWithUserPermissions([]);
			expect(screen.queryByTestId(ALLOWED_CODE)).toBeNull();
		});
	});
});
