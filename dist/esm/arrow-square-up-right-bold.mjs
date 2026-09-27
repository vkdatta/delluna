export const name="arrow-square-up-right-bold";
export const id="dl_83c3416951d54d2d80ea";
export const url=new URL("../icons/arrow-square-up-right-bold.svg?v=e20adc944474bb022c4e81926b84d36d1e4e7f9348de0ec6fc663cf13a85e60d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
