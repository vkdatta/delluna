export const name="timeline-fill";
export const id="dl_f2eec4e51b7588a014f2";
export const url=new URL("../icons/timeline-fill.svg?v=aa89e6c8f4357fff75c7af4fd791058bc7245edf1df696b8b6e3bb121180f13d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
