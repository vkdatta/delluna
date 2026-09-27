export const name="fiber_pin";
export const id="dl_6c0bdcf15f3747c5fc89";
export const url=new URL("../icons/fiber_pin.svg?v=676a7c9a99e138eeebb44a3dae2b84167bf40071867085fd069e7bfb43fe1dc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
