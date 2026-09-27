export const name="balloon-light";
export const id="dl_3ff46a9a470e4fb3b235";
export const url=new URL("../icons/balloon-light.svg?v=52ae2e511d516c37b44ebcbbe29f45e833535dac51f109d1f3454000db281f4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
