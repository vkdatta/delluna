export const name="medication_liquid-fill";
export const id="dl_15e8b53108a24a91c538";
export const url=new URL("../icons/medication_liquid-fill.svg?v=7652d6e9ab8498a79a5898ada630dd887675005467c7f8f8e1a022cb196e5b55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
