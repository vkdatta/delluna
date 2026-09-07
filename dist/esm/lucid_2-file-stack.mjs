export const name="lucid_2-file-stack";
export const id="dl_d6d604b534cb44bb8362";
export const url=new URL("../icons/lucid_2-file-stack.svg?v=f81f33f6ddf8b51dd7e0366dec037950f00b2ffb48c743c7e2179a6a46c2f4b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
