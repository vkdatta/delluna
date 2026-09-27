export const name="spatial_gallery";
export const id="dl_98817948d5a69f656f0f";
export const url=new URL("../icons/spatial_gallery.svg?v=856c1d96e36def2efc1339f7b52c6baf1bd89e393b6aaf5ff6ba6d3ffe458500",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
