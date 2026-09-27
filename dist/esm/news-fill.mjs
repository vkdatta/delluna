export const name="news-fill";
export const id="dl_611e44a7eb2d7af5e076";
export const url=new URL("../icons/news-fill.svg?v=9772f5af0d6083619806354cf5e7cb15a201f75ef434cdb6504fbccdba8b7c42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
