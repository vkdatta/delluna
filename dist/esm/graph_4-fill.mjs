export const name="graph_4-fill";
export const id="dl_769677c29d1a4e8ab7e8";
export const url=new URL("../icons/graph_4-fill.svg?v=0ba355d74d24dbbacc4629dabbdaecd8cb939c05ebed10b71a630f6042c7c6fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
