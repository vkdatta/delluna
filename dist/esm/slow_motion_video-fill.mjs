export const name="slow_motion_video-fill";
export const id="dl_a93a9e1621285052096d";
export const url=new URL("../icons/slow_motion_video-fill.svg?v=cbe36d5d3427c51b9437cbce2283a48b9698b61b5ad454b5b1089a271ef35788",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
