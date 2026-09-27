export const name="library_add_check-fill";
export const id="dl_6666f2d36bc04092f140";
export const url=new URL("../icons/library_add_check-fill.svg?v=83099030c6f1ea7c3a855172b2817706a1300907c08723a67e8da179a578a130",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
