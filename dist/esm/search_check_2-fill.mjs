export const name="search_check_2-fill";
export const id="dl_dfb25aebb2204bfd847a";
export const url=new URL("../icons/search_check_2-fill.svg?v=f6710f262dffe078b217075ebf283ec8a84a7acaa7bc149b52fb39521db9a178",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
