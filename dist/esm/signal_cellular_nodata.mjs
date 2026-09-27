export const name="signal_cellular_nodata";
export const id="dl_054cc018ac8d3fe9419d";
export const url=new URL("../icons/signal_cellular_nodata.svg?v=e0e48fea324f876f2d7e38446c9066079f54218a4819378bc451f83851116f44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
