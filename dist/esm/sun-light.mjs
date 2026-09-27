export const name="sun-light";
export const id="dl_22a202b8301e5129007e";
export const url=new URL("../icons/sun-light.svg?v=771779c0fa36808a0adb3d8179207dd31b6b2bc09ac8cd7b41acdf2f8ed5cfcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
