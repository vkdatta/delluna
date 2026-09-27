export const name="gas-can-duotone";
export const id="dl_1e4635c46ab140eda849";
export const url=new URL("../icons/gas-can-duotone.svg?v=f207efa7749babeb3b3a726683e4e207f4efafe2407f9c5b409aaad52512fb97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
