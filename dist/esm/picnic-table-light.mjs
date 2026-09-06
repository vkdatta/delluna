export const name="picnic-table-light";
export const id="dl_b405a0a3983545ec8735";
export const url=new URL("../icons/picnic-table-light.svg?v=59293df65960ee1907948b29f10f9e50c2973cc7cc58b18ee9dd4152d3c2b83b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
