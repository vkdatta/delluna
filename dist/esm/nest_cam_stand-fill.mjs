export const name="nest_cam_stand-fill";
export const id="dl_520c072de80842359c57";
export const url=new URL("../icons/N/nest_cam_stand-fill.svg?v=b4af50d218c83f6e6ef8508d5f3ff54611a9b56b1344ebc0f940354c61a0d4cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
