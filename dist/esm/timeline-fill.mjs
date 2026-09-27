export const name="timeline-fill";
export const id="dl_638a1faafb0988e0661f";
export const url=new URL("../icons/timeline-fill.svg?v=9316c451e412b3e7c777cf35748df9aabff55f695366d3c8b7e2d63d29cd2b32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
