export const name="wine-off";
export const id="dl_b9195bad052b40d081c6";
export const url=new URL("../icons/wine-off.svg?v=d79528430f4df1a364436aefde6ef77b26b25cbbaa6c13378d0b9e911ba2f06d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
