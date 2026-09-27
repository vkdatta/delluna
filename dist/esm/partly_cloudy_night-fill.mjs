export const name="partly_cloudy_night-fill";
export const id="dl_296e8c728d1da0f88f36";
export const url=new URL("../icons/partly_cloudy_night-fill.svg?v=3f1b22e802e61129a87a52d6998a9c12d3162e6ed13f6a4fc8cd3bed2747f32e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
