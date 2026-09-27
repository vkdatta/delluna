export const name="missed_video_call-fill";
export const id="dl_aef5af72c9161e59915c";
export const url=new URL("../icons/missed_video_call-fill.svg?v=0bccf57a0c54ec1c666571fec29782997242488585dbdaa1a39217999593ec57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
