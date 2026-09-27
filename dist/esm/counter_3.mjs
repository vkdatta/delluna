export const name="counter_3";
export const id="dl_9b2a3b850926fce357c6";
export const url=new URL("../icons/counter_3.svg?v=3632b933797b6db1da772ef0cc5a1216bce02f756387d400a5a1e9bc675936f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
