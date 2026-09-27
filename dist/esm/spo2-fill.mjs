export const name="spo2-fill";
export const id="dl_d5a2980f62bfc76751b4";
export const url=new URL("../icons/spo2-fill.svg?v=a5522a15b004d14dc8ab1e93be9ba516c5cc47c6741245372dbf98306c669d07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
