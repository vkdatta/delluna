export const name="trend-up-light";
export const id="dl_ffe303b41d854ca6baf0";
export const url=new URL("../icons/T/trend-up-light.svg?v=ed08a42b23da59d972e0b385058f4ec04065f95188c854820cd9c9b110a4ff84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
