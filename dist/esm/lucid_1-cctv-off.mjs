export const name="lucid_1-cctv-off";
export const id="dl_e0168aeb0b9a446fbf85";
export const url=new URL("../icons/lucid_1-cctv-off.svg?v=359125d5e851f0791ea7b4323f70158fb61ad3de23370823714859c126b8173f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
