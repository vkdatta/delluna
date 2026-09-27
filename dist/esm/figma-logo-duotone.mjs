export const name="figma-logo-duotone";
export const id="dl_4c645335fa6e4e909e1d";
export const url=new URL("../icons/figma-logo-duotone.svg?v=780c2145d062bf77cc5c442a282fea93c183db6ed848a8555ccd10c674d4eb89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
