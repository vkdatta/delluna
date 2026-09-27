export const name="battery_6_bar-fill";
export const id="dl_75c319267e1256905ab7";
export const url=new URL("../icons/battery_6_bar-fill.svg?v=6a4124ef998dbe14fa2dc50fe45cba36df0b40972f136fb27abbca4076d0984f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
