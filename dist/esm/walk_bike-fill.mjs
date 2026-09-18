export const name="walk_bike-fill";
export const id="dl_c0550966e4ed4b5d8c82";
export const url=new URL("../icons/walk_bike-fill.svg?v=8e28a630803ac7a11f086e297eab4901ca07ec4e35ae7ab932f1263a8ddc41be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
