export const name="remove_selection-fill";
export const id="dl_b5a951c16ce0a59ba2ca";
export const url=new URL("../icons/remove_selection-fill.svg?v=b23f2830bdb428dc35c3b586ac7f26503c558aff301ebb81dcaa69cfad85f9b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
