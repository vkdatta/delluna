export const name="video_library-fill";
export const id="dl_2a15c4b950a7c07a37fa";
export const url=new URL("../icons/video_library-fill.svg?v=ae833b4f89e7a99626f4ccd5a9bb8e9237ab81b3876b56673150070d96b966f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
