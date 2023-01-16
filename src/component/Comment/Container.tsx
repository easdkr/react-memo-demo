import { PropsWithChildren } from "react"

export const Container = ({ children } : PropsWithChildren) =>{
  return (
    <div style={{display: 'flex', justifyContent: 'center', width: '100%', height: '100%', alignContent: 'center', backgroundColor: '#323232'}}> 
      <div style={{margin: 'auto'}}>
        {children}
      </div>
    </div>
  )
}