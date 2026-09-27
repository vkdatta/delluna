export const name="skeleton-fill";
export const id="dl_6429d99c0b0be2a55f77";
export const url=new URL("../icons/skeleton-fill.svg?v=2ae118813b8f3f9519f1c752d7adba4f830c63759d4efa9bcfa562cd674dfb8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
