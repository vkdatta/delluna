export const name="lucid_1-book-up-2";
export const id="dl_9c4f1034d4d94b50b32c";
export const url=new URL("../icons/lucid_1-book-up-2.svg?v=89912b7d34a1621d2c65c2d650a03cf457d0e317e0f2927dc361c1f058ac565b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
