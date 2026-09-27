export const name="circle-half-tilt-thin";
export const id="dl_241f7d4a405d47a4b5ee";
export const url=new URL("../icons/circle-half-tilt-thin.svg?v=32294df0f4562ab83a81d2206aaa6b7fdd7723730b7068d4af92389aec46f439",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
