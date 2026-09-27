export const name="book-open-text-duotone";
export const id="dl_eacdaf257fef49cca909";
export const url=new URL("../icons/book-open-text-duotone.svg?v=aa1b94b1210d3fbbfbe67e871867be02fa5d7fdcd03ac2bd27b4f868500e5f3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
