export const name="video_call";
export const id="dl_7b7e70a39db9b1f64e2a";
export const url=new URL("../icons/video_call.svg?v=d1f5c6f1a24cc053627f23058c64f38ce3546cadeb385dc8e76d16aca663853f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
