import { SignInButton } from "@core/auth/session/components/actions/sign-in-button";
import { SignOutButton } from "@core/auth/session/components/actions/sign-out-button";
import { useLogout } from "@core/auth/session/hooks/use-logout";
import { useOidcState } from "@core/auth/session/hooks/use-oidc-state";
import { useTranslation } from "@i18n/use-translation";
import { Flex, Modal, Text } from "@mantine/core";
import { useState } from "react";

export const TokenExpiracyModal: FC = () => {
	const { t } = useTranslation("auth");

	const [didInteract, setDidInteract] = useState(false);

	const { isTokenExpired } = useOidcState();
	const { logout } = useLogout();

	return (
		<Modal
			opened={isTokenExpired}
			onClose={logout}
			title={t().session.expired.Title}
			withCloseButton={false}
		>
			<Flex direction="column" gap="md">
				<Text>{t().session.expired.Message}</Text>
				<Flex direction="column" gap="sm">
					<SignInButton
						disabled={didInteract}
						onClick={() => setDidInteract(true)}
					/>
					<SignOutButton
						disabled={didInteract}
						onClick={() => setDidInteract(true)}
						variant="outline"
					/>
				</Flex>
			</Flex>
		</Modal>
	);
};
