export const name="recent_patient-fill";
export const id="dl_3ca14491b855d983673c";
export const url=new URL("../icons/recent_patient-fill.svg?v=45e30189ce422ddd58310de9b6b40fe968e8fda470d18a2563af64a4b1d58fc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
