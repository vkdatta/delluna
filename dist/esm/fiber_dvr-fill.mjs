export const name="fiber_dvr-fill";
export const id="dl_ffb7f4f61fc84056539d";
export const url=new URL("../icons/fiber_dvr-fill.svg?v=3d1d7c489e9904906c2971c9f8c012a7ec3b9b96349a4b234f9ffb578a720925",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
