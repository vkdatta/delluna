export const name="video_frame_copy-fill";
export const id="dl_980baf920238c5e99cb0";
export const url=new URL("../icons/video_frame_copy-fill.svg?v=66a7fa6d4f56e3437e62a3197750a55dfc13d037146c63d9a81e6da80a282ad3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
