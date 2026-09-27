export const name="sneaker-move-duotone";
export const id="dl_f928f496e339c9c9fd55";
export const url=new URL("../icons/sneaker-move-duotone.svg?v=03d5230199b29eb24abfe04d76cb90b87a1ac4d8eaefa7929248f44bdb09fa13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
