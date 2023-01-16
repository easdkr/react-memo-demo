import { PropsWithChildren } from "react"

export const Box = ({ children }: PropsWithChildren) => {
  return (<div style={{display: 'flex', textAlign: 'center', justifyContent: 'space-evenly', alignItems: 'center', width: '450px', height: '50px', background: '#121212'}}>
    {children}
  </div>)
}