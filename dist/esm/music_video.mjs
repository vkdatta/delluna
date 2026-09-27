export const name="music_video";
export const id="dl_35b3203f53c05f4a1f7b";
export const url=new URL("../icons/music_video.svg?v=9eb5125d089e6230698529fca76fdc1fc1f138da5ffc1964ba01bca902353883",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
