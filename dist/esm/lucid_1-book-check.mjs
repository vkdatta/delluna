export const name="lucid_1-book-check";
export const id="dl_7bd0554bb2124a53ab22";
export const url=new URL("../icons/lucid_1-book-check.svg?v=7aa2b678e498d4ab10ae71e7287364bdf6ffaae81a5994505c13591f421427a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
