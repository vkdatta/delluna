export const name="copyleft-duotone";
export const id="dl_ad24d431ed1b49178cb0";
export const url=new URL("../icons/copyleft-duotone.svg?v=83b10ebe23ecaeca29d78be411544fb9aaf7770f3dcdc74be30799eb227dbaa9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
