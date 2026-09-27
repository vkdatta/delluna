export const name="tools_flat_head-fill";
export const id="dl_ff762408dd3e0a1cfd06";
export const url=new URL("../icons/tools_flat_head-fill.svg?v=9f68c7df1004dd753aae89be4279227c59e5b077bf355e4c2db0628a7f0e6b13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
