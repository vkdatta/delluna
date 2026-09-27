export const name="video_file";
export const id="dl_9e5e3d30b392e492e375";
export const url=new URL("../icons/video_file.svg?v=23bdcde601558966ed3d673bfb9c94957c789464a3c034e31f437aa052b6f9c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
