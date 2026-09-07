export const name="gas-can-bold";
export const id="dl_92114730ff4b448e8193";
export const url=new URL("../icons/gas-can-bold.svg?v=4e59ed67f7d5f5175fb54179ed5139ebee916199eb28694c95c401aa5a8e1604",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
