export const name="lucid_2-hd";
export const id="dl_f74cfa96aad2427691de";
export const url=new URL("../icons/lucid_2-hd.svg?v=efbf87b1d21f3f177330a193608b083c30ba4ca177c62e14e08db0c5e11e854a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
