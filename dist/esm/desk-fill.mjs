export const name="desk-fill";
export const id="dl_ae4d9aa89c804dae9470";
export const url=new URL("../icons/desk-fill.svg?v=8e79e143aa34dbaa05fcb84c9a6f8149654dfbaa5aeda37818e56f57e55e4d59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
