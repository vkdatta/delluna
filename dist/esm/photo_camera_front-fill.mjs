export const name="photo_camera_front-fill";
export const id="dl_3bc8a04b5f93220851df";
export const url=new URL("../icons/photo_camera_front-fill.svg?v=193210142608904809618e02efc9af704ec0462376188517f4ae318dc30ea928",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
