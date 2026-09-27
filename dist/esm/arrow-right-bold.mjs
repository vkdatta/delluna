export const name="arrow-right-bold";
export const id="dl_692a531f1569429a9d82";
export const url=new URL("../icons/arrow-right-bold.svg?v=2d20cf4eaada2d3f27d849dd7b85f7bf802776072a7b1492f3f779f16dbf56d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
