export const name="film-strip-thin";
export const id="dl_be8a678baa1842dda711";
export const url=new URL("../icons/film-strip-thin.svg?v=d89912ba1627145f39f59c21f88833886d6275cadc442c492ad55376799ac9f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
