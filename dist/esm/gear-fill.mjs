export const name="gear-fill";
export const id="dl_718169e70b1b44ca8804";
export const url=new URL("../icons/gear-fill.svg?v=564f53f72b0bd4371dc14a3d39a3fcf4c5a1a74d285eb56fff465a954f993ec8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
