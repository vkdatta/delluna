export const name="gas_meter";
export const id="dl_5e44f99e82b62f3a20c4";
export const url=new URL("../icons/gas_meter.svg?v=01ad850cd34909a30621548c2736f33291ebcb37868e9e3b8e67c07219102cbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
