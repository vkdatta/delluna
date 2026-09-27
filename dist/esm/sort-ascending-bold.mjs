export const name="sort-ascending-bold";
export const id="dl_f396d6c08a42d6e654de";
export const url=new URL("../icons/sort-ascending-bold.svg?v=ccda379c14babe7702f02803848c171d500183317543766d85f7cb116f46fc9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
