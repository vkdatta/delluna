export const name="view_real_size-fill";
export const id="dl_ac1aba754ff6a5ad9634";
export const url=new URL("../icons/view_real_size-fill.svg?v=af5d463c05a829b7b4bb5dbda5027803cd6e4714a59de3962b58acf5c70d7dbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
