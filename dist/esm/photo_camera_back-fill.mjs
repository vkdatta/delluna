export const name="photo_camera_back-fill";
export const id="dl_2852e0e1f684c28814fc";
export const url=new URL("../icons/photo_camera_back-fill.svg?v=bedb3c3e89e4a8b8c438078d464f80d4d0d4a9b7ac1e737cb1dbd09d6040fb48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
