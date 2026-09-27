export const name="rows-plus-top-fill";
export const id="dl_e9b0b44ffa20478c8fbf";
export const url=new URL("../icons/rows-plus-top-fill.svg?v=c3a2e6573215a3d1ca30f69eff3d849e0270a77b8e6dba954ab3ab8b23d0e7f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
