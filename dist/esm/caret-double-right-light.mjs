export const name="caret-double-right-light";
export const id="dl_2cac7cad938e40b58332";
export const url=new URL("../icons/caret-double-right-light.svg?v=75030fe5458721736574ba28e65869a7d8402679b63318492d779e10f7638821",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
