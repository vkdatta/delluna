export const name="ice-cream-duotone";
export const id="dl_940ec24486af4a50b9f4";
export const url=new URL("../icons/ice-cream-duotone.svg?v=381cb98c17570fd04fb40310e3ff2ddc9bc96ce4e7094ea1e83015855ac3a469",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
