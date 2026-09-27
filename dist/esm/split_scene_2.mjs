export const name="split_scene_2";
export const id="dl_781ec34de8c11b897458";
export const url=new URL("../icons/split_scene_2.svg?v=922972fb99dcb828dd674e9cdf18409d9a1691f1a033fcad24362fe902f1d20c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
