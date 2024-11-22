export default function App() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-4">
      <appkit-button label="Connect Wallet" loadingLabel="Connecting..." balance="show" />
      <appkit-account-button />
      <appkit-connect-button label="Connect Wallet" loadingLabel="Connecting..." />
      <appkit-network-button />
    </main>
  );
}
