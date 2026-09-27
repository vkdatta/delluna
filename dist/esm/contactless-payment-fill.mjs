export const name="contactless-payment-fill";
export const id="dl_40f9edbad5934e0da3dc";
export const url=new URL("../icons/contactless-payment-fill.svg?v=5449b299b309941ca8f7c0b86519d35d039cfc80ecda981de4a88924f64224a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
