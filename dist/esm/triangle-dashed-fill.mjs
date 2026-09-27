export const name="triangle-dashed-fill";
export const id="dl_fce16bb8c40698a8320a";
export const url=new URL("../icons/triangle-dashed-fill.svg?v=80f8f8a62789596fbca2ed546cc47d5d0a9e87ff2e9f7551762c995625dcda79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
