///<reference types="react" />

type TMountOptionsMarketing = {
  initialPath: string,
  onNavigate: ({ pathname }: { pathname: string }) => void,
}

type TMountOptionsAuth = TMountOptionsMarketing & {
  onSignIn: () => void,
}

declare module "auth/AuthApp" {
  const mount: (
    ref: React.MutableRefObject | null,
    {
      initialPath,
      onNavigate,
      onSignIn,
    }: TMountOptionsAuth,
  ) => { onParentNavigate }
  
  export { mount }
}

declare module "dashboard/DashboardApp" {
  const mount: (ref: React.MutableRefObject | null) => void
  
  export { mount }
}

declare module "marketing/MarketingApp" {
  const mount: (
    ref: React.MutableRefObject | null,
    {
      initialPath,
      onNavigate,
    }: TMountOptionsMarketing,
  ) => { onParentNavigate }
  
  export { mount }
}
