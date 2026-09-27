export const name="video-conference-fill";
export const id="dl_70dde689576ec6686e39";
export const url=new URL("../icons/video-conference-fill.svg?v=3e8b4108f712954f9ff7ff50caeb60b02330bd0820c733e5e54e6bdee404ab80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
