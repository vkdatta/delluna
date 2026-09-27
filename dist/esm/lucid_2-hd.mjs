export const name="lucid_2-hd";
export const id="dl_f74cfa96aad2427691de";
export const url=new URL("../icons/lucid_2-hd.svg?v=0a6c26df8aa53de8c30b6f1408c6977df8ac74914d1f47d518103ac5c0aed6af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
