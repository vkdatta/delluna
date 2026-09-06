export const name="number-circle-zero";
export const id="dl_545ddd3d0560421986e1";
export const url=new URL("../icons/number-circle-zero.svg?v=697015695ba6aed9bf517880e41d8134b2ac23a6cd3976fd1a756855ca8c9d7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
