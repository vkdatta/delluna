export const name="menu-fill";
export const id="dl_8f8cafc8b787a229a9d5";
export const url=new URL("../icons/menu-fill.svg?v=0b1ffa780acd46aa4e654a82b304e06ff4749b22d4f3c3e1250905353f779463",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
