export const name="ruler-bold";
export const id="dl_39faf8bd42dc442fb3da";
export const url=new URL("../icons/ruler-bold.svg?v=534b249ab6fc2d3a6fc13b69abe0d92efb89481a265b99f26df56367b9f6a8f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
