export const name="lucid_3-map-pin-x";
export const id="dl_70381fb2553242c090bc";
export const url=new URL("../icons/lucid_3-map-pin-x.svg?v=1565fa730c23f2f039669c29ac0ac22f4c4ff86b28b300377453be9756c6e068",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
