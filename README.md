# COINK

**COINK** is a modern, user-friendly cross-chain and on-chain swap and bridging platform. It leverages the LI.FI Widget to provide seamless, secure, and customizable crypto transactions across multiple blockchains, all with a beautiful Next.js frontend.

## 🚀 Features

- **Universal Cross-Chain Swaps**: Bridge and swap tokens across all major EVM chains and more.
- **Modern UI/UX**: Responsive, glassmorphic design with dark mode support.
- **Wallet Integration**: Connect with MetaMask and other wallets directly in the widget.
- **Order Summary & Checkout**: Clean, e-commerce-style checkout with both card and crypto payment options.
- **Customizable Widget**: The LI.FI widget is themed to match the COINK brand and supports drawer, wide, and compact variants.
- **Multi-Chain Support**: Ethereum, Polygon, Arbitrum, Optimism, BSC, Avalanche, Base, zkSync, and more.
- **Transaction History**: View transactions in progress and history (via widget).
- **Internationalization**: Ready for multi-language support.
- **Security**: Built on industry standards (EIP-712, EIP-2612, Permit2, etc.).

## 🛠 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **UI**: [shadcn/ui](https://ui.shadcn.com/), [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
- **Widget**: [LI.FI Widget](https://docs.li.fi/widget/overview)
- **Wallets**: [wagmi](https://wagmi.sh/), MetaMask, WalletConnect
- **State/Query**: [@tanstack/react-query](https://tanstack.com/query/latest)
- **Icons**: [Lucide](https://lucide.dev/)
- **TypeScript**: Full type safety

## 📦 Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/your-org/coink.git
   cd coink
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## 🧩 Project Structure

- `app/` — Next.js app directory (pages, layouts, providers)
- `components/` — UI, widget, and layout components
- `public/` — Static assets (logo, images)
- `lib/` — Utility functions
- `hooks/` — Custom React hooks

## 📝 Customization
- Edit `components/universal-checkout/CheckoutWidget.tsx` and `components/payment-checkout/PaymentCheckout.tsx` to adjust widget config, theme, and allowed chains.
- Update `/public/coin.png` for your brand logo.

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License
[MIT](LICENSE)

---

**COINK** — Simplifying cross-chain crypto for everyone.
