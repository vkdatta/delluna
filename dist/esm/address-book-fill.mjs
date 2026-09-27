export const name="address-book-fill";
export const id="dl_18bf62fd003949968266";
export const url=new URL("../icons/address-book-fill.svg?v=042a9a57bc1e1ec882f61b1730c824d2d9bae19efeebda15919c21682d3b2118",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
