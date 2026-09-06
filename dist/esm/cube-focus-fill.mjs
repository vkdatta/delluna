export const name="cube-focus-fill";
export const id="dl_d390a3f6a9d948079d1a";
export const url=new URL("../icons/cube-focus-fill.svg?v=acb17fc90587226670bab488e731bb5d8545cfc2bc5d100b26dc82e1c00439dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
