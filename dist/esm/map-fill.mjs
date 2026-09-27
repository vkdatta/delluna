export const name="map-fill";
export const id="dl_4f1ea9a5875c8f2c79fc";
export const url=new URL("../icons/map-fill.svg?v=f18cb50557bd210c5b2ab3aa7ce4c362ab24144e7a12d823d3ad4de7475392f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
