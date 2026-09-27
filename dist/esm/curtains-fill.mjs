export const name="curtains-fill";
export const id="dl_47451b9d2ea2fa38ad80";
export const url=new URL("../icons/curtains-fill.svg?v=c023bf7948043df031b53a2279b414b018f2b8fa1c5f7e7f04b435738df4e260",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
