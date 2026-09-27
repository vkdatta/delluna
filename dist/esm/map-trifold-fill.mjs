export const name="map-trifold-fill";
export const id="dl_65884bab01fa431ab371";
export const url=new URL("../icons/map-trifold-fill.svg?v=d2c22ad5f1574aaf26f8ba99ca668e23fff772454a22530b598bfca69a1bcf90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
