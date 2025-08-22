import type { WithChildren } from "@common/extended-ui/general/types/component.types";
import { CallbackRender } from "@core/callbacks/components/callback-render";
import { AfterProviders } from "@providers/after-providers";
import { AuthProvider } from "@providers/auth/auth.provider";
import { OidcProvider } from "@providers/auth/oidc.provider";
import { UserInfoProvider } from "@providers/auth/user-info.provider";
import { LocalConfigProvider } from "@providers/config/local-config.provider";
import { DeviceInfoProvider } from "@providers/device/device-info.provider";
import { LanguageProvider } from "@providers/language/language.provider";
import { NetworkProvider } from "@providers/network/network.provider";
import { UIProviders } from "@providers/ui/ui.providers";

export const CoreProviders: FC<WithChildren> = ({ children }) => {
	return (
		<LocalConfigProvider>
			<UIProviders>
				<DeviceInfoProvider>
					<LanguageProvider>
						<NetworkProvider>
							<CallbackRender>
								<OidcProvider>
									<AuthProvider>
										<UserInfoProvider>
											<AfterProviders>{children}</AfterProviders>
										</UserInfoProvider>
									</AuthProvider>
								</OidcProvider>
							</CallbackRender>
						</NetworkProvider>
					</LanguageProvider>
				</DeviceInfoProvider>
			</UIProviders>
		</LocalConfigProvider>
	);
};
