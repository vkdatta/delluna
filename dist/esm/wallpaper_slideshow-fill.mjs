export const name="wallpaper_slideshow-fill";
export const id="dl_67a574b63629407ca20c";
export const url=new URL("../icons/W/wallpaper_slideshow-fill.svg?v=9c9d6a315c284d7a373a7da53793f152a0e387cffe9e86c414e0d9596530440d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
