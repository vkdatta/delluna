export const name="cell-signal-high-light";
export const id="dl_f25e2004fe2a4578b341";
export const url=new URL("../icons/cell-signal-high-light.svg?v=8dbaa7eb83cccc4a839dd29ebcf7e99d49947d22e4e1ddd25d95c3c2f626af48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
