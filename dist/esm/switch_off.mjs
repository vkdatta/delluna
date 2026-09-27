export const name="switch_off";
export const id="dl_02ea049fe742ee245abd";
export const url=new URL("../icons/switch_off.svg?v=b7bdeddfefef400fb6991dda1ddc1422ffbc9660f7244f48d9ad4bf0591cce3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
