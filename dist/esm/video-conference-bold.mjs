export const name="video-conference-bold";
export const id="dl_60dd4de33efbe46c3156";
export const url=new URL("../icons/video-conference-bold.svg?v=2735f85e0ecae9d16cbeb1fba8a48785dd3527fec2075e3cf3a77cc59f1e6e94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
