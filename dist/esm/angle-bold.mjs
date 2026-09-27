export const name="angle-bold";
export const id="dl_294acdf52cd548adb002";
export const url=new URL("../icons/angle-bold.svg?v=e8b4bfa90127d06e182877543c5d8c632bc14e1d3561e8b28ddd40049a8be69d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
