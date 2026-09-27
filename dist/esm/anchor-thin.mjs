export const name="anchor-thin";
export const id="dl_cdabf429e48e4b32af37";
export const url=new URL("../icons/anchor-thin.svg?v=82da3d14f9ebbf5b800974945682fc662c8942ce5ef7b966c72d0347660bb387",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
