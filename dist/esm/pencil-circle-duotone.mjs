export const name="pencil-circle-duotone";
export const id="dl_a59c2024b2b341349d4b";
export const url=new URL("../icons/pencil-circle-duotone.svg?v=86e13a272a03904809bb9768cd30a524b53d1790e3a235421d62cadac9bfac0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
