export const name="graph_6-fill";
export const id="dl_50a03d57a1e85b23c72e";
export const url=new URL("../icons/graph_6-fill.svg?v=f2bc8b40502a8e96f99da9dd6f221aaf4c7d58126e0dc0e2c2de5aa82d2d18e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
