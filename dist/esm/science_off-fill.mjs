export const name="science_off-fill";
export const id="dl_a18e8b66b105d3397ce9";
export const url=new URL("../icons/science_off-fill.svg?v=5dcc6cf1b26b93de09ec54a2d89c5cf83a853ea348d87a521a21cc7683149cea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
