export const name="mobile_layout-fill";
export const id="dl_930d63697ff4c3467532";
export const url=new URL("../icons/mobile_layout-fill.svg?v=54ba7dd12de6ce732bbe2a85856bc4fa41ba2c1f46158b1584eeab459cbf7117",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
