export const name="x-circle-thin";
export const id="dl_73cc676fafec42138425";
export const url=new URL("../icons/X/x-circle-thin.svg?v=4333a3bfb38613cb00dc7d8c9bcaba921a6f19bb85c6610a7b41cd37c3ebe175",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
