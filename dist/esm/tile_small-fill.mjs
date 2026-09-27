export const name="tile_small-fill";
export const id="dl_448075d729d55a877686";
export const url=new URL("../icons/tile_small-fill.svg?v=61e8c7a90a563eedd57264f230734ca1872afcf41f49cae4cf7e24aba3444840",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
