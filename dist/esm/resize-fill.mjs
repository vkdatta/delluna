export const name="resize-fill";
export const id="dl_859d3938e4f34041b63f";
export const url=new URL("../icons/resize-fill.svg?v=c480f699b6a71b3a93fc910604b3e5e64d0502b4b7f49ddc1941eb914562858e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
