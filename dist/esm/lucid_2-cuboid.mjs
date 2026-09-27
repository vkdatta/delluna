export const name="lucid_2-cuboid";
export const id="dl_83790abbd2c64ce08d2a";
export const url=new URL("../icons/lucid_2-cuboid.svg?v=6231a53d570e8cafa032a96afc5baee15650519c468ec7a5573e132376add013",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
