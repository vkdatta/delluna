export const name="scatter_plot-fill";
export const id="dl_70f0ea00487bda911604";
export const url=new URL("../icons/scatter_plot-fill.svg?v=29f17639e0a0dd91537bfb1cdffc5ce4361fdec15aa423abebea61914e4b5b77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
