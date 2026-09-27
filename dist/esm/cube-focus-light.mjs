export const name="cube-focus-light";
export const id="dl_2ce73ddfd62745728e9f";
export const url=new URL("../icons/cube-focus-light.svg?v=084745d5a82d2c786526d208babe50283b4ae75e87298a889408c14e8ae83d00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
