export const name="grains-bold";
export const id="dl_607c0b03ad464defb8d9";
export const url=new URL("../icons/grains-bold.svg?v=c1792d01d33129f69ba63290bb88bd18a5441a419c4cfc722e664297cf0d42c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
