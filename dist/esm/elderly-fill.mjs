export const name="elderly-fill";
export const id="dl_3e39f2c1f98d4d6d1e0f";
export const url=new URL("../icons/elderly-fill.svg?v=d31dda9f414925f5b29b72af9a61dbc2bbdbe6d0606b2e78bd47e2455658e068",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
