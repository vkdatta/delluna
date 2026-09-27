export const name="arrow-square-in-light";
export const id="dl_697b8c3924e648c2a548";
export const url=new URL("../icons/arrow-square-in-light.svg?v=61014ca6ae612fc361b07b5c3660c614298171e4a423efbec51241ed1c1f3c5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
