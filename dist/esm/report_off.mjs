export const name="report_off";
export const id="dl_1bb5e9cdd580e071a3f7";
export const url=new URL("../icons/report_off.svg?v=a05c8c36f0c8c23532a8596cd7bb27b012986df0195780a97304dc2059912793",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
