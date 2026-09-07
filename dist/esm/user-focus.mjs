export const name="user-focus";
export const id="dl_742612a6da7744949cc6";
export const url=new URL("../icons/U/user-focus.svg?v=c862a28997712ecac74fcbc76ed66a867cd7ce0437a00ff309c421dde1d302f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
