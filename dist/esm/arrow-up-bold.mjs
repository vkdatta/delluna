export const name="arrow-up-bold";
export const id="dl_2e8ae96ddbef4341bf0e";
export const url=new URL("../icons/arrow-up-bold.svg?v=4f0faba5b772809d9fdfa3dae92b1bd40d447d59adc5d4789bcf6d43a109181f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
