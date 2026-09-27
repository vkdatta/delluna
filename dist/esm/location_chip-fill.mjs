export const name="location_chip-fill";
export const id="dl_99c49428225065cff456";
export const url=new URL("../icons/location_chip-fill.svg?v=4e78dfd303f096f4198ca094ed66d57d29bad324af8e616f33da6716c859e36c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
