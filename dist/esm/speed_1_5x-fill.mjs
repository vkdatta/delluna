export const name="speed_1_5x-fill";
export const id="dl_0a29e2f6ab0ef73e42e6";
export const url=new URL("../icons/speed_1_5x-fill.svg?v=c7f570f4c112787fe51e4c4878059b714a64d98323ecc3e05efd71ae2d20ad5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
