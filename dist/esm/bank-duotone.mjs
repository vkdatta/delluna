export const name="bank-duotone";
export const id="dl_8dfd66391fea47b6b8cf";
export const url=new URL("../icons/bank-duotone.svg?v=30d95704f1966447edd863baca2b14e89d265d5771053a944c4cf116eb6b0b6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
