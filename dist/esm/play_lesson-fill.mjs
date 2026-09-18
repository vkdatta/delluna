export const name="play_lesson-fill";
export const id="dl_f5e02884e527427fbc7d";
export const url=new URL("../icons/P/play_lesson-fill.svg?v=72b124d2f0ab403d3853605493f98403805ce4c9f7736b631150bc05b66c3e90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
