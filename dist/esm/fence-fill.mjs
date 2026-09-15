export const name="fence-fill";
export const id="dl_f560e120cc264fe19849";
export const url=new URL("../icons/F/fence-fill.svg?v=b8fd02c0a1ea120b62f3eae3ebf83a5b17a01aa9598c04935385454e8a0cb95e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
