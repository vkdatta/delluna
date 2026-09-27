export const name="minus-circle-fill";
export const id="dl_8d48ba23883042cca991";
export const url=new URL("../icons/minus-circle-fill.svg?v=45cfb26ec7fb2b3c492e7a949880c8c47d2fd982289e5ca563f974edafeff33f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
