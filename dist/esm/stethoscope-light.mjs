export const name="stethoscope-light";
export const id="dl_be51a76bb2afaa663a1a";
export const url=new URL("../icons/stethoscope-light.svg?v=279e6d17937e635425ed4f03645428f4788a08b3a41b1fe42539c928f01f81da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
