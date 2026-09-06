export const name="number-zero-duotone";
export const id="dl_fbe925d4d7a342b9ae55";
export const url=new URL("../icons/number-zero-duotone.svg?v=024b04d1c56e433a70197be81bdb3cf61f04fa66d0de3217105a36657ffe8579",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
