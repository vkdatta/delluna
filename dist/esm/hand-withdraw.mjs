export const name="hand-withdraw";
export const id="dl_3e7651742dfd47f0ae0c";
export const url=new URL("../icons/hand-withdraw.svg?v=3e2b8bc07cbe4a19661fcb1178812fcc2dc0a4f61266a764206c12863c0f784e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
