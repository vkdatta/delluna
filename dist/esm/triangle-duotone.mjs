export const name="triangle-duotone";
export const id="dl_90469f952eb64148be51";
export const url=new URL("../icons/T/triangle-duotone.svg?v=83729dcac381b2e6b51caf36eeaa1c5b2e7c25a1cc7c242e14c3020e3c09d24a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
