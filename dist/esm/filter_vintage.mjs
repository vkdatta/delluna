export const name="filter_vintage";
export const id="dl_d50cada13bf7b939393b";
export const url=new URL("../icons/filter_vintage.svg?v=67ef785bfbcbd2e17374b43d14fa9d491851311f653e06d7f1ae3f08b7704444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
