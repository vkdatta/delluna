export const name="room_service-fill";
export const id="dl_02e7141500e7eb86c99e";
export const url=new URL("../icons/room_service-fill.svg?v=ac41867574af335d21eb55483e97ca7dd02fe4a939949a9efaaa21c21fd7bb47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
