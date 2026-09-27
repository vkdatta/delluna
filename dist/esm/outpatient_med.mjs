export const name="outpatient_med";
export const id="dl_c505d83d0ca8a0221364";
export const url=new URL("../icons/outpatient_med.svg?v=9c0c7d7a57c60049182838b19efe4e08000cda4298b1562dbf86c558cd004992",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
