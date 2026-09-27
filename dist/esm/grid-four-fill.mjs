export const name="grid-four-fill";
export const id="dl_5643bb6b52fc4273afc9";
export const url=new URL("../icons/grid-four-fill.svg?v=d4fe6a8d5974f0472902e8d48fd1f419e0d375c03bc5ecc8da9ef41aa6596c0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
