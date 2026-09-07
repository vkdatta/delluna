export const name="spinner-gap-duotone";
export const id="dl_c1bbab061dcb468cbe4c";
export const url=new URL("../icons/S/spinner-gap-duotone.svg?v=1e55c9e017694948fd916cce862e1dc06f35e02f362dc6d36cd07e1c78f4682e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
