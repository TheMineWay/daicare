import type { WithChildren } from "@common/extended-ui/general/types/component.types";
import { AuthProvider } from "@providers/auth/auth.provider";
import { OidcProvider } from "@providers/auth/oidc.provider";
import { DeviceInfoProvider } from "@providers/device/device-info.provider";
import { LanguageProvider } from "@providers/language/language.provider";
import { UIProviders } from "@providers/ui/ui.providers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const TestProviders: FC<WithChildren> = ({ children }) => {
	return (
		<DeviceInfoProvider>
			<LanguageProvider>
				<UIProviders>
					<NetworkProvider>
						<OidcProvider>
							<AuthProvider>{children}</AuthProvider>
						</OidcProvider>
					</NetworkProvider>
				</UIProviders>
			</LanguageProvider>
		</DeviceInfoProvider>
	);
};

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false, // Disable retries for faster tests
			staleTime: 0, // Ensure data is always considered stale
		},
	},
});

const NetworkProvider = ({ children }: WithChildren) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};
