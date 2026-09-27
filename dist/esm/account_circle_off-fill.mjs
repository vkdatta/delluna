export const name="account_circle_off-fill";
export const id="dl_f39ebe223736c1723a75";
export const url=new URL("../icons/account_circle_off-fill.svg?v=68db81471ab06d06c1081bb452bdaa5855e19395b6d0c4f8b5207d4280e51c20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
