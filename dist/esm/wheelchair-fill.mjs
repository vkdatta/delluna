export const name="wheelchair-fill";
export const id="dl_49900ca6e9534ba5abd3";
export const url=new URL("../icons/W/wheelchair-fill.svg?v=73491539d2cbc9a7b9c7181a0c3885c7aa992c564efb6a6689e7f451bac91d60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
