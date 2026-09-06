export const name="lucid_2-hd";
export const id="dl_f74cfa96aad2427691de";
export const url=new URL("../icons/lucid_2-hd.svg?v=08e5200445ff5b0c30fd15d8a2cd024d68760b7ae9d375f95311afb6602ff897",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
