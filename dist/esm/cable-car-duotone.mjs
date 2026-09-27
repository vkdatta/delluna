export const name="cable-car-duotone";
export const id="dl_3856b93396a046cdbb09";
export const url=new URL("../icons/cable-car-duotone.svg?v=fb1fccfcc707f365f31b8c8b7c523a24308826a99ffbec02523e4db6042d0d96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
