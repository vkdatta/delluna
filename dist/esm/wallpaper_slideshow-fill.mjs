export const name="wallpaper_slideshow-fill";
export const id="dl_ef8daf9a9b9642e63736";
export const url=new URL("../icons/wallpaper_slideshow-fill.svg?v=f7d849620b32240e54cec90e1b805191d9248ed1ddcedd1a9b6a737f52610798",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
