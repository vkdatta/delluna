export const name="looks_4";
export const id="dl_5f1753304171d26a61d4";
export const url=new URL("../icons/looks_4.svg?v=0657b5bdccb405c35e8c1d2cb8e3dc1f9e0ac3c09ab943c27fe0bf7a45abbe12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
