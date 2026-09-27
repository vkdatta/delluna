export const name="dropdown_menu-fill";
export const id="dl_0a426cf5a82931fe3716";
export const url=new URL("../icons/dropdown_menu-fill.svg?v=65cdee7478541b3a474d2373f27500a9db8f5f69446dd97a9f19b366f800775d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
