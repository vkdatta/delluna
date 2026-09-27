export const name="arrow-bend-double-up-left-light";
export const id="dl_19eab26c51ff4b71ad5c";
export const url=new URL("../icons/arrow-bend-double-up-left-light.svg?v=0ee32dad23fd986595f5e12e479b1fe193863eb78bee1ea86dbd5264a80b069e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
