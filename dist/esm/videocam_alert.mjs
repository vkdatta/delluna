export const name="videocam_alert";
export const id="dl_04f9fc44cab1e150ad94";
export const url=new URL("../icons/videocam_alert.svg?v=e6c906823e44fa79e5d574fdf121da128986191a0885e565490d68d2b87c50e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
