export const name="file-video-bold";
export const id="dl_346e94b2d57c4efeb4ab";
export const url=new URL("../icons/file-video-bold.svg?v=8949d24d271ddd9231c9c4ffa8c232517420ae718a1ad676e0a7853697e4e0a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
