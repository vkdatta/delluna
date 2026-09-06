export const name="lucid_2-file-video-camera";
export const id="dl_f4fa5eea1f2940aabfc3";
export const url=new URL("../icons/lucid_2-file-video-camera.svg?v=63e91209c9d58bd48df42dddae7c5a5640f7986789d149603ee71d38bd49e83e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
