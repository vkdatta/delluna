export const name="video_template-fill";
export const id="dl_6df9e43aca4fce9ed56e";
export const url=new URL("../icons/video_template-fill.svg?v=ad3656b157890ba06fe8d4122be3d697347517b58c42b548d7d05f3026ddd1d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
