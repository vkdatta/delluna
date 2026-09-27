export const name="speed_0_2x";
export const id="dl_333060156ab2a2767264";
export const url=new URL("../icons/speed_0_2x.svg?v=ec47711c9c0353d951be34578d2005c9e3646975d20e4134794c2a9a075c9746",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
