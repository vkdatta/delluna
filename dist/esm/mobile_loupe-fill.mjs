export const name="mobile_loupe-fill";
export const id="dl_911017d55edc4404ae73";
export const url=new URL("../icons/mobile_loupe-fill.svg?v=2319a36849c1ca0260e3f12239fd14a3d0c2bb6f4640c81a38d3b817160ea2c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
