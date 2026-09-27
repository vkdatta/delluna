export const name="arrow_circle_down";
export const id="dl_691f077defad86d86f1c";
export const url=new URL("../icons/arrow_circle_down.svg?v=1d8ad9baccf331a7c55e401dd7b4615fd11c7608af562606f177ada7c537d2d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
