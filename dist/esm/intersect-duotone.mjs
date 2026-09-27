export const name="intersect-duotone";
export const id="dl_5a77f51777ce4d84b31b";
export const url=new URL("../icons/intersect-duotone.svg?v=31eea66737db365fef25fd53aa82866d312367cd9fa21817be981f86a11cfc9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
