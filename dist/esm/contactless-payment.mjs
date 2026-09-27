export const name="contactless-payment";
export const id="dl_0b30e8f3aadc47019371";
export const url=new URL("../icons/contactless-payment.svg?v=4ca07b84158f072fa1e7b43e42ab038fcf83369378c5947224f31d27b9d0df0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
