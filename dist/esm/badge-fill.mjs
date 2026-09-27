export const name="badge-fill";
export const id="dl_9ac591413e2ade8e30ce";
export const url=new URL("../icons/badge-fill.svg?v=200387783c8616af7967fa8af59d66ec52c61b1a524e7134342762807e01ea48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
