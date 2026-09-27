export const name="contact_phone";
export const id="dl_dcfce291e0d699eadfed";
export const url=new URL("../icons/contact_phone.svg?v=4410c04c6390f3aa9a91870a423df73586c45337a09a99b7a7dfdeb1d4827d7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
