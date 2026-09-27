export const name="replace_video-fill";
export const id="dl_d4bc37ad6e052bc47a88";
export const url=new URL("../icons/replace_video-fill.svg?v=d81740d187f1b18b753eb9293c4ddae2de416c8ee846ba3f943bf69c210de262",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
