export const name="topic";
export const id="dl_4a48d3d29126f0464808";
export const url=new URL("../icons/topic.svg?v=c1d2a9e60e3d7e121ee3a2c63d827943ced48534b82732a70d99d89180f6502d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
