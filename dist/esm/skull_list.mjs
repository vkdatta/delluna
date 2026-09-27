export const name="skull_list";
export const id="dl_2d32cb3be8ada26f9824";
export const url=new URL("../icons/skull_list.svg?v=4b3ae0439aaeae8d31eca526db376ad5b2a4ef199d24f6abf6cf8afecb84e4a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
