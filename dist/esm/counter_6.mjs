export const name="counter_6";
export const id="dl_d18917518982186e9add";
export const url=new URL("../icons/counter_6.svg?v=90c572cd8a1364d06f908231d59c1ffc48032bc010a4bd99a22b8b935ad7594a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
