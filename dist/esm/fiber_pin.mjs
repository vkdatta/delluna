export const name="fiber_pin";
export const id="dl_1908ab865b884a7c88d1";
export const url=new URL("../icons/F/fiber_pin.svg?v=39aecd57d403de731cc078aa5fc149d97a5c9294d65f35ea9cd7b3feac43a65e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
