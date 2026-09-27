export const name="square-split-vertical-bold";
export const id="dl_6c23c2753b95e80eec3a";
export const url=new URL("../icons/square-split-vertical-bold.svg?v=137392ce631a17036937ce6aa15c3cd4c832a14bb1439cd18d8b0d229a244f79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
