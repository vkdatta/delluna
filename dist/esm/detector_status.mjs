export const name="detector_status";
export const id="dl_ce18f7cf84f260f03f84";
export const url=new URL("../icons/detector_status.svg?v=344e3d5e597bee2c6abbfc658cbbe497be3c5d368009430f3d673dbb3e5c9ad4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
