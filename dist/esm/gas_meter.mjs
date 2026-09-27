export const name="gas_meter";
export const id="dl_5a324eac8c33c35fea9d";
export const url=new URL("../icons/gas_meter.svg?v=9a1beca4803d920771bc98805ad50c270a2dbd811f4966037632af197bc92ec3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
