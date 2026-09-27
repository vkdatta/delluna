export const name="fiber_pin";
export const id="dl_5b868b1907392972eec5";
export const url=new URL("../icons/fiber_pin.svg?v=39aecd57d403de731cc078aa5fc149d97a5c9294d65f35ea9cd7b3feac43a65e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
