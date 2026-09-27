export const name="contactless-payment-thin";
export const id="dl_d230a64401a94ad48289";
export const url=new URL("../icons/contactless-payment-thin.svg?v=5c60af383674c456d002b851ac28aaf4dbfc9527c5c8f1b89633144fa1e98054",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
