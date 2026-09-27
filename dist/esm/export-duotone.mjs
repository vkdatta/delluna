export const name="export-duotone";
export const id="dl_223841854d254ef199ae";
export const url=new URL("../icons/export-duotone.svg?v=c76e7f192cdcf880bad63180286c63fa0b03cde611f837a14327f9edd6ad9b6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
