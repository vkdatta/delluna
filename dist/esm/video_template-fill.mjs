export const name="video_template-fill";
export const id="dl_b0f8e50b41504d8caeb1";
export const url=new URL("../icons/video_template-fill.svg?v=5969bfe97c24c865a63feb6cc5818e8a2e17b2f5793c513fef047b5f3b1db798",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
