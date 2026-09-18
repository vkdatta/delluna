export const name="tab_search-fill";
export const id="dl_4d7bcde4c3d74fe89684";
export const url=new URL("../icons/T/tab_search-fill.svg?v=e477287500b34a559b6aa00b33ec7b745fc6357f7f7dd00d40bfd4e82c5bff39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
