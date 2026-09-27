export const name="biohazard-duotone";
export const id="dl_2d905628890a47e7b0e8";
export const url=new URL("../icons/biohazard-duotone.svg?v=3032ffebddd8c53dad9960cf68d3f16a9d5309ae05fa5505c015d8150ad0f3f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
