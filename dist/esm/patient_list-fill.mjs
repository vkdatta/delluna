export const name="patient_list-fill";
export const id="dl_cac93b24dc90e86155db";
export const url=new URL("../icons/patient_list-fill.svg?v=dc0200242369441ebe8dbf551deb9c4cf2950e6abbdd62317274fa1180fe21ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
