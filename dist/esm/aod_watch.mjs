export const name="aod_watch";
export const id="dl_191d74b447e1cf2e24d2";
export const url=new URL("../icons/aod_watch.svg?v=89b4c24fedc9ef8e47710cdfedcfbc4edd13cd2d098452ffaf5c3a24786ba782",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
