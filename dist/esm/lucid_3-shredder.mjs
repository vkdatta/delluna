export const name="lucid_3-shredder";
export const id="dl_7ebcdd2524f841488101";
export const url=new URL("../icons/lucid_3-shredder.svg?v=33485c072fae0e9b4d5b23dd885618afed10402ca84787d4f2e2fabb61182e1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
