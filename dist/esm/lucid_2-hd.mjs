export const name="lucid_2-hd";
export const id="dl_f74cfa96aad2427691de";
export const url=new URL("../icons/lucid_2-hd.svg?v=ac581cce36908a63f142e512eb210cd407879aa11face6de63b62f70dae49c66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
