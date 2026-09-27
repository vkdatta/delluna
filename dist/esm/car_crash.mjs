export const name="car_crash";
export const id="dl_b805c9befe325648f8a0";
export const url=new URL("../icons/car_crash.svg?v=88f927c0680511522d47def4da3dc836e54b55bb9b9ccf7fd877fc54fb8d4556",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
