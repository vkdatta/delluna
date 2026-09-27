export const name="dots-three-vertical-duotone";
export const id="dl_3c0a77ab4d5e45e18a46";
export const url=new URL("../icons/dots-three-vertical-duotone.svg?v=a0d9792da75070fe7caa21ca59208515d47f679407ea97fa6fdcfd5fc2636d3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
