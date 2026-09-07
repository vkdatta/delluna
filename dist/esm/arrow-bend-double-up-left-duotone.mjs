export const name="arrow-bend-double-up-left-duotone";
export const id="dl_3d6f77fa79cf4707b11d";
export const url=new URL("../icons/arrow-bend-double-up-left-duotone.svg?v=11684e91d4029c795b17e4d0985364c17a7dd8e13aa487631941f52acb9fcc1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
