export const name="screwdriver-thin";
export const id="dl_fa483e6ccdc606bae535";
export const url=new URL("../icons/screwdriver-thin.svg?v=ad6ad8a7f91cb3a6f6d19c7bfd967c1770a9a1e71be88cd68bffa311ab206152",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
