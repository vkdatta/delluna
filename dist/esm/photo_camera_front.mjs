export const name="photo_camera_front";
export const id="dl_ab9c03b07d2f8fc34f03";
export const url=new URL("../icons/photo_camera_front.svg?v=630a67496acb98b448ef5bb6f43a0abd120baa8495c7e5a6c94370bc755378c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
