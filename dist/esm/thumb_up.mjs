export const name="thumb_up";
export const id="dl_b28077d94e14801c01a8";
export const url=new URL("../icons/thumb_up.svg?v=4bc8960ddc4de8b828297dc3c44ec47fc14a742ecc3895f3a821761664076518",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
