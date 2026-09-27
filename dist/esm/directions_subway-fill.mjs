export const name="directions_subway-fill";
export const id="dl_44827659f8bc6044b7cd";
export const url=new URL("../icons/directions_subway-fill.svg?v=551d531c3a6d0fcbe12861c6a3919de38fba29cb2294903de30f1231173773fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
