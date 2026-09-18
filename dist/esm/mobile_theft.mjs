export const name="mobile_theft";
export const id="dl_1beb22ae12f242f6a963";
export const url=new URL("../icons/M/mobile_theft.svg?v=e17a445d398a7360787be30d9f85eecdf22e02fe9b83dbba7bcfcbd68eba2c83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
