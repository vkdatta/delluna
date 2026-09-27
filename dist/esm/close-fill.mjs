export const name="close-fill";
export const id="dl_7868332c03ab3a722cce";
export const url=new URL("../icons/close-fill.svg?v=90cc108e5630ede1093c9fa4cc96b1bafe99912fc9cd2e3ec4c51b3648d4ffea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
