export const name="grid_off-fill";
export const id="dl_7b5d3e52ac52c6256250";
export const url=new URL("../icons/grid_off-fill.svg?v=737a842d01faba09b8770ad8857f6c6de41ee6aaecaebfbc0d130af75d9da1df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
