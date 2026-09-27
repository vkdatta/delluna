export const name="patient_list";
export const id="dl_c235097f1260d2ffbd4d";
export const url=new URL("../icons/patient_list.svg?v=3583db889ee26a2df4999c373124866ed9dafbe07ec5ab4458c7a413400bf35e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
