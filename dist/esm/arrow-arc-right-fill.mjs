export const name="arrow-arc-right-fill";
export const id="dl_d52e3dea9cba429599e4";
export const url=new URL("../icons/arrow-arc-right-fill.svg?v=8fc8c81bc164b5c8cedf1fdae1c669984da73ab0ae1ef6a0a1d278ab81eabe2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
