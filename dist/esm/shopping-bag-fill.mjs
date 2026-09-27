export const name="shopping-bag-fill";
export const id="dl_c00492e71e43428f90d1";
export const url=new URL("../icons/shopping-bag-fill.svg?v=7619baf32f4c51ebe8ea491011cc7642064b1b3a6aa4e8e3dfafa154f239285b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
