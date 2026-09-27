export const name="video_camera_back-fill";
export const id="dl_c178b1048de6562afb83";
export const url=new URL("../icons/video_camera_back-fill.svg?v=a0fbe8dc77a65856e82c6e82a1847ea9e7946695cd183d828e432b54dd23fe0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
