export const name="dot-thin";
export const id="dl_e8330ac3c0ae465db274";
export const url=new URL("../icons/dot-thin.svg?v=62c4848d3a2b8cd4379489867c2391d2f5b2e7d210befc90f89136e08722ce1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
