export const name="filter_frames-fill";
export const id="dl_c3272d888540f60af5e2";
export const url=new URL("../icons/filter_frames-fill.svg?v=3bc9246a4bb8e22d72f1788c30c8521a041e0f69429358370b437bd7b4249259",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
