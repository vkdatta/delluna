export const name="light_mode-fill";
export const id="dl_bbcf56f2d30ef1fb2894";
export const url=new URL("../icons/light_mode-fill.svg?v=31c977d213eff058e0a36d8cdc896aa9f4ca74757a56e487157e23b115f7d75d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
