export const name="tv-minimal";
export const id="dl_60008ea33c4142a385f4";
export const url=new URL("../icons/tv-minimal.svg?v=16eb92e1ce983a5ef6914bb16e5ac1ba13559fd644e3e0c8c26e56bc93c43e9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
