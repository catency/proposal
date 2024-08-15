import { ProposalProvider } from '@/contexts/proposal/ProposalProvider'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ProposalProvider>
      <div>{children}</div>
    </ProposalProvider>
  )
}
