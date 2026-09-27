export const name="masks-fill";
export const id="dl_3b2ad695db61122cee75";
export const url=new URL("../icons/masks-fill.svg?v=9196591918f0cf7a6327f81b782ba3b124070f56c06f1f8bd7f54c74b702fed4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
