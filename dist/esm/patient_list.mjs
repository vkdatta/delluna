export const name="patient_list";
export const id="dl_4762444b6b704438842a";
export const url=new URL("../icons/P/patient_list.svg?v=15d1fadce32f7dede6a5c79292705795b1938621585986e759264f5506459779",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
