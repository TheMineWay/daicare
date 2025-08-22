import { ENV } from "@constants/env/env.constant";
import { SignInButton } from "@core/auth/session/components/actions/sign-in-button";
import { LocalConfigManager } from "@core/config/local-config/components/local-config-manager";
import { useTranslation } from "@i18n/use-translation";
import { ActionIcon, Container, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaGear } from "react-icons/fa6";

export const Auth: FC = () => {
	const { t } = useTranslation("auth");
	const { t: commonT } = useTranslation("common");

	const [
		isLocalConfigOpened,
		{ open: openLocalConfig, close: closeLocalConfig },
	] = useDisclosure();

	const logoUrl = ENV.brand.authLogo;

	return (
		<>
			<Container className="flex flex-col items-center justify-between h-full py-6">
				<div />
				<div className="w-full max-w-xl flex flex-col gap-8 items-center justify-center">
					{logoUrl && <img src={logoUrl} alt={t().components.auth.logo.Alt} />}
					<SignInButton />
				</div>
				<ActionIcon
					variant="outline"
					size="lg"
					onClick={openLocalConfig}
					aria-label={commonT().components["local-config"].Title}
				>
					<FaGear />
				</ActionIcon>
			</Container>

			<Modal
				centered
				title={commonT().components["local-config"].Title}
				opened={isLocalConfigOpened}
				onClose={closeLocalConfig}
			>
				<LocalConfigManager />
			</Modal>
		</>
	);
};
