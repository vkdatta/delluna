export const name="add_a_photo";
export const id="dl_59eaf69641e8e3d2a2d5";
export const url=new URL("../icons/add_a_photo.svg?v=9099920f148d1cc4b16d62718d1b8611de0459beff9925101db6c4e693f37232",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
