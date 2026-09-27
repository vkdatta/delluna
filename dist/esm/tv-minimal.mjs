export const name="tv-minimal";
export const id="dl_60008ea33c4142a385f4";
export const url=new URL("../icons/tv-minimal.svg?v=4c47644a40fc09ee3961156787c63ea69aa7e4ab06c8bd83c4862ddbd8380fb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
