export const name="videocam_alert-fill";
export const id="dl_48228a075c184797bed0";
export const url=new URL("../icons/videocam_alert-fill.svg?v=60f335e2807ca08dbe48d98094391ba317cd000263fa5ad0974244a3a8fcaa7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
