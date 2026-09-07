export const name="selection-background-duotone";
export const id="dl_7d95efab0ae4439ea362";
export const url=new URL("../icons/S/selection-background-duotone.svg?v=008dc2cc1a921ef2616beea94e70f8d24c42c13c824fc7281aeb282f850715d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
