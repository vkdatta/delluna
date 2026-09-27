export const name="label_important-fill";
export const id="dl_0c263d356267ebbe4e4f";
export const url=new URL("../icons/label_important-fill.svg?v=fbac51c27f4f84187a70439cbea72c2ff4d3d3e482e97f214732653859de1047",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
