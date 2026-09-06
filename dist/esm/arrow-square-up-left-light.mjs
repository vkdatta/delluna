export const name="arrow-square-up-left-light";
export const id="dl_e3fb455ca8f5431bb6e7";
export const url=new URL("../icons/arrow-square-up-left-light.svg?v=20ca1235b356fc107cad699ef1ac3d44179e28931805ae091ff5ca66d0d83c14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
