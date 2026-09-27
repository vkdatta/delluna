export const name="gif-duotone";
export const id="dl_5061e7a4e73d4caeae06";
export const url=new URL("../icons/gif-duotone.svg?v=44ac9561689ce377a38bc0c97ee63740b744a609b2c0e2a5578d06dcec90750c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
