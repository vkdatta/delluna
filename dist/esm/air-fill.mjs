export const name="air-fill";
export const id="dl_ffa7a2523e314b55ae9e";
export const url=new URL("../icons/air-fill.svg?v=204aa4c6ebe6d1bacf5716d6259d313007ba6c4228a24ba739f723d12ec3b66c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
