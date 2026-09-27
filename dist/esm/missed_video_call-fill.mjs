export const name="missed_video_call-fill";
export const id="dl_d5256ef6ef8cac243328";
export const url=new URL("../icons/missed_video_call-fill.svg?v=e375e65104f2432af501b5af3b379eef4f4517565b06dfaea312868051df05c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
