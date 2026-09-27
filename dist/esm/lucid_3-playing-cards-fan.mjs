export const name="lucid_3-playing-cards-fan";
export const id="dl_c38c721dbdae487c90af";
export const url=new URL("../icons/lucid_3-playing-cards-fan.svg?v=354c74d158ee09b1ae37d30b13f2bba264b072c0391e593371c3a153796b2b28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
