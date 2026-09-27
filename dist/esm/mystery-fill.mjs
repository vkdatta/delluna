export const name="mystery-fill";
export const id="dl_c09c887a1294c7c07332";
export const url=new URL("../icons/mystery-fill.svg?v=4885c3b6ffe5eef7e234a14e54bbcb7b32a3df96f4034495ac11bbf141c83c2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
