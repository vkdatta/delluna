export const name="group_search-fill";
export const id="dl_415ceab4706ba4f1389e";
export const url=new URL("../icons/group_search-fill.svg?v=85b919c8daa05b6405a1483518ab9dcbda0e2489ff69bdb6d11851a05172dfd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
