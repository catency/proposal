import { createContext, useContext, useState } from 'react'

interface Proposal {
  id: number
  title: string
  description: string
}

interface ProposalContextData {
  proposals: Proposal[]
  addProposal: (proposal: Proposal) => void
}

const ProposalContext = createContext<ProposalContextData>(
  {} as ProposalContextData,
)

export function useProposal() {
  return useContext(ProposalContext)
}

interface ProposalProviderProps {
  children: React.ReactNode
}

export function ProposalProvider({ children }: ProposalProviderProps) {
  const [proposals, setProposals] = useState<Proposal[]>([])

  function addProposal(proposal: Proposal) {
    setProposals([...proposals, proposal])
  }

  return (
    <ProposalContext.Provider value={{ proposals, addProposal }}>
      {children}
    </ProposalContext.Provider>
  )
}
