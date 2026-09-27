export const name="dots-three-outline-vertical-duotone";
export const id="dl_b96bb4be00ec44ab94d0";
export const url=new URL("../icons/dots-three-outline-vertical-duotone.svg?v=16d1c49b761e598f4c4b60dac6a6284c55c00499dd1d7a8a9018a3a0cb4c5b30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
