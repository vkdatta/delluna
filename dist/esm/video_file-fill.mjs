export const name="video_file-fill";
export const id="dl_2924deb4970d42d58d27";
export const url=new URL("../icons/V/video_file-fill.svg?v=96522d92296ee5b3e3db312dea3a0554c5b7545beafb8dab5f157a83eea5723f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
