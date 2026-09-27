export const name="straight";
export const id="dl_f32584263d08bec0b704";
export const url=new URL("../icons/straight.svg?v=5a411dd05b19f4bd778e16a6d5b57784ddf8d3f6e79b9b91ceb9b6313f9b7e39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
