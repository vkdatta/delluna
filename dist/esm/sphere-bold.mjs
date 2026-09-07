export const name="sphere-bold";
export const id="dl_c0943f82b0fd40058e56";
export const url=new URL("../icons/S/sphere-bold.svg?v=f079a4f6e5f04620b09caf4061a47cad3ef3e38e238b2b5f7d94663e9399af12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
