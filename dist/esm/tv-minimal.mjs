export const name="tv-minimal";
export const id="dl_60008ea33c4142a385f4";
export const url=new URL("../icons/tv-minimal.svg?v=d297c0efcb819df0fc31826f0106a01176b6b34466f0936feadc3ce343d93991",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
