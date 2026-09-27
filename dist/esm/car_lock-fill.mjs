export const name="car_lock-fill";
export const id="dl_4fe6e92f3585af19490f";
export const url=new URL("../icons/car_lock-fill.svg?v=b55a999a7fe26408e5431dc09e05227d297dc1753691ea44da623993aeab9043",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
