export const name="lucid_3-square-arrow-right";
export const id="dl_ffb095a64bdf4caa92b7";
export const url=new URL("../icons/lucid_3-square-arrow-right.svg?v=e8a707f3dea6eb2436651b4deb89ab316d508a901880cf88831066dcfa4da737",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
