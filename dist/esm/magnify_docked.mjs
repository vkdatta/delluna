export const name="magnify_docked";
export const id="dl_38b3f151f1906940dbfd";
export const url=new URL("../icons/magnify_docked.svg?v=36ca0065657ff34348730a83c87815072015fd78b55c442b5f0183df54fb0247",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
