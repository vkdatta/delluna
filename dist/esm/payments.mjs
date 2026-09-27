export const name="payments";
export const id="dl_68b55f2eaccb2a63a632";
export const url=new URL("../icons/payments.svg?v=2b53c3cc208709157f36c021645f39bef1de9d2d0b103c49e9827030e25c6d6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
