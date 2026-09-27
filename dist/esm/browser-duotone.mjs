export const name="browser-duotone";
export const id="dl_afce4a3d89314cacb9ae";
export const url=new URL("../icons/browser-duotone.svg?v=442343ffb21a7c6379abf2e2a4356820b3fd9a457ad6e2823843123133ee509b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
