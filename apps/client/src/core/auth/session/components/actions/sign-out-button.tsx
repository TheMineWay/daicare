import { ENV } from "@constants/env/env.constant";
import { useLogout } from "@core/auth/session/hooks/use-logout";
import { useTranslation } from "@i18n/use-translation";
import { Button, type ButtonProps } from "@mantine/core";
import { FiLogOut } from "react-icons/fi";

type Props = {
	onSuccess?: CallableFunction;
	onClick?: CallableFunction;
} & ButtonProps;

export const SignOutButton: FC<Props> = ({ onSuccess, onClick, ...props }) => {
	const { interpolated } = useTranslation("auth");
	const { logout, isLoggingOut } = useLogout();

	const onLogout = () => {
		logout().then(() => onSuccess?.());
	};

	return (
		<Button
			leftSection={<FiLogOut />}
			color={ENV.auth.ui.providerColor}
			onClick={() => {
				onClick?.();
				onLogout();
			}}
			loading={isLoggingOut}
			{...props}
		>
			{interpolated((t) => t.actions.Logout)}
		</Button>
	);
};
