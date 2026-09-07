export const name="map-trifold";
export const id="dl_e38b0291592c40dc977e";
export const url=new URL("../icons/map-trifold.svg?v=2de856029430ca68cfd9c1d8c8c45255c8d998d7716630d362c1eec153548da6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
