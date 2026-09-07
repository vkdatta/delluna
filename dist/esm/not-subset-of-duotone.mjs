export const name="not-subset-of-duotone";
export const id="dl_30f289a7a6b544f58f6f";
export const url=new URL("../icons/not-subset-of-duotone.svg?v=2d1c6b56ea3c89ee7ecff65d0144a1387d886984dbf7f4ae0c2212e25ac59813",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
