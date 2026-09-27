export const name="view_comfy_alt-fill";
export const id="dl_ab4e9263388c95d7d420";
export const url=new URL("../icons/view_comfy_alt-fill.svg?v=0d1de93f51cc20f59f90b53c0a5c3e6c2a7d20bb061a5b32b6ed6ef8dfc8e35b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
