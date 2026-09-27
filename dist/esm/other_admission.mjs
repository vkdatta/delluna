export const name="other_admission";
export const id="dl_d1e87afeae79552dacda";
export const url=new URL("../icons/other_admission.svg?v=207292ebadb84375f4f33a959df5d1fdb57b183581af0499e771e6062445ef85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
