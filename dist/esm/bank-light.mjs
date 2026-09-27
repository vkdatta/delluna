export const name="bank-light";
export const id="dl_982f693de0aa4144981f";
export const url=new URL("../icons/bank-light.svg?v=f0a6ffbbb039984008f1019afbfaccfc07cbc731c4e3b14eec5e11603b2e2494",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
