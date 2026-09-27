export const name="square-fill";
export const id="dl_f043720a8d2a3e7539b1";
export const url=new URL("../icons/square-fill.svg?v=b15986cd03d281f2f82fb8f05685ec1d14d4bb1097d959a436f2880dc9123c12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
