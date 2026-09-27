export const name="person-bold";
export const id="dl_1339082097344b35a9a3";
export const url=new URL("../icons/person-bold.svg?v=4d9c21224197abf58a8a730b30f55ba453bb76f827e3d8e6f248bd550fae9739",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
