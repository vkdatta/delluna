export const name="mouse-scroll-bold";
export const id="dl_163036040db143dba567";
export const url=new URL("../icons/mouse-scroll-bold.svg?v=27e0b80f280a299ac33a7821f5932ff0fb96cb47b42361d0416a3718fe3a3fdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
