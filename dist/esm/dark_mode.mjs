export const name="dark_mode";
export const id="dl_73543218f39cdd7229ab";
export const url=new URL("../icons/dark_mode.svg?v=57c5381a711ba257d9972e0adbf3416fafad10659481e495ff68c56eb0b6ba09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
