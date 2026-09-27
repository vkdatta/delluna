export const name="nfc";
export const id="dl_ecd1f94dfb9591d185c9";
export const url=new URL("../icons/nfc.svg?v=772c8a71439cfb8477eda1255620d27c7a3867ad5895142dae7b7f8080d894af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
