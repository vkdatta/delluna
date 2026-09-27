export const name="front_loader-fill";
export const id="dl_94a97f706949d4d54314";
export const url=new URL("../icons/front_loader-fill.svg?v=e7152b9a5b4dc3cad6a1196ac042e24c1e0d860c56424523b6711a6b84aa69bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
