export const name="lucid_3-move-down";
export const id="dl_cf16da18b3fd4d1295fa";
export const url=new URL("../icons/lucid_3-move-down.svg?v=bfda9a693fa4e3553f9d2b5b43b1de8c59f237f62cf8b130ddee4459e379f81d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
