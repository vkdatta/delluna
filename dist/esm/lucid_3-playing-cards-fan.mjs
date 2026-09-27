export const name="lucid_3-playing-cards-fan";
export const id="dl_c38c721dbdae487c90af";
export const url=new URL("../icons/lucid_3-playing-cards-fan.svg?v=eb3c7241a287fac0c46a0a7906a26c2c43031bd5ef8c09ebd44f2d74bb01a47b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
