import { ProposalProvider } from '@/contexts/proposal/ProposalProvider'

export default function CreateProposal() {
  return (
    <ProposalProvider>
      <div>
        <h1>Create Proposal</h1>
      </div>
    </ProposalProvider>
  )
}
