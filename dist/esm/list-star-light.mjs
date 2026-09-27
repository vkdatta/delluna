export const name="list-star-light";
export const id="dl_de1acdc3d1184e41a4c4";
export const url=new URL("../icons/list-star-light.svg?v=33ebdb92ed09a405e1adba8d3d51596c3d7198ba585e24254d12c958cf5abe04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
