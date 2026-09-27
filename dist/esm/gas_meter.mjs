export const name="gas_meter";
export const id="dl_bda40077a3992e11c5fc";
export const url=new URL("../icons/gas_meter.svg?v=39e7c8e48d049455d5aa050dcd85514b78e1197b8e5048f55aa56a6bf4f97745",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
