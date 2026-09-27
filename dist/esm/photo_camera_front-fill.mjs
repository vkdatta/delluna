export const name="photo_camera_front-fill";
export const id="dl_748d9fb959f3f9f15038";
export const url=new URL("../icons/photo_camera_front-fill.svg?v=3c6ec0aeecfcffb3b6ab7a9a670885935dd493935dd626fc52b9d7183223a8f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
