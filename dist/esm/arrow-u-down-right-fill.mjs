export const name="arrow-u-down-right-fill";
export const id="dl_ea54f96907f645759758";
export const url=new URL("../icons/arrow-u-down-right-fill.svg?v=cc98c05e656f32f06377c4d0229ae613431d54da7c6d13c6c50228e11843043a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
