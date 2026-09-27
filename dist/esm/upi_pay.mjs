export const name="upi_pay";
export const id="dl_5fdff3a35f874c2d974d";
export const url=new URL("../icons/upi_pay.svg?v=d54285003509f136713e99ec7ebe5f958a34dead6f22e0d9b3992a20daf29c31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
