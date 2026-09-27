export const name="file-video-bold";
export const id="dl_346e94b2d57c4efeb4ab";
export const url=new URL("../icons/file-video-bold.svg?v=8ecdb8a11d4edab006db9ae2d678e8cfe99e536bde80250226d1a90f3b9c5397",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
