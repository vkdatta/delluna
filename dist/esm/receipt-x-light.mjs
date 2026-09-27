export const name="receipt-x-light";
export const id="dl_6f2b1d87c42f44518fb7";
export const url=new URL("../icons/receipt-x-light.svg?v=a4c395a6596ced8994b5186442a8634c606f158d379560c89e595fe186851c10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
