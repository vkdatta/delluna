export const name="stars_2-fill";
export const id="dl_c386fb6004bf4ab2a023";
export const url=new URL("../icons/S/stars_2-fill.svg?v=1a2b219bce81ef6bcd2cc8f2c09879b440a2682336a0babf1f054a0f45126fab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
