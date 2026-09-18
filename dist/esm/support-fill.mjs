export const name="support-fill";
export const id="dl_cee1f92b1e854b50a3ab";
export const url=new URL("../icons/S/support-fill.svg?v=c59e96a67ce635bf9f5a395bcb1840af9d8e00a0bc953cee5482f1e43b89f7ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
