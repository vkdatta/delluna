export const name="truck-trailer-thin";
export const id="dl_b5610ee4a8bb91dbf1aa";
export const url=new URL("../icons/truck-trailer-thin.svg?v=38b27046540efca86f55cbc11749eed97c91cdc5b0049ecdecf8008f30ca70bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
