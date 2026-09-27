export const name="cards";
export const id="dl_e377d5c2e033416285e0";
export const url=new URL("../icons/cards.svg?v=2687f5996780b9cee806e97463d3898c7755fd4afc4db337f028a44ebe109317",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
