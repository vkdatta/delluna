export const name="destruction";
export const id="dl_bedf853c0f138c394aed";
export const url=new URL("../icons/destruction.svg?v=19a6ecf0e7d3242781d8e3de1dad55e4296dc014ed5a24ab1302619ae1c48682",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
