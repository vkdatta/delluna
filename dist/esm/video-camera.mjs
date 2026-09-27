export const name="video-camera";
export const id="dl_2265cc4652ea21bcf3fc";
export const url=new URL("../icons/video-camera.svg?v=3a7aa23b3f2b31192acbead65d4e71690a0634488ceaef7bb8b4d52b713b93ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
