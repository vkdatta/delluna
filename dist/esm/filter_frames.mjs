export const name="filter_frames";
export const id="dl_8f67ef9887478dd2c894";
export const url=new URL("../icons/filter_frames.svg?v=c3251a3a5bcaf9a8b761c91f655baee720d5f709eac670815235d9185e4bc9c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
