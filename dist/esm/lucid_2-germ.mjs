export const name="lucid_2-germ";
export const id="dl_7e6d2e997e1848abb3b0";
export const url=new URL("../icons/lucid_2-germ.svg?v=3af6425759130179f6d53f000b3ea00d9efd154707ee06c884a9af517eebfafe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
