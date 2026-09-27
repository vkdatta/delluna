export const name="bottom_drawer-fill";
export const id="dl_5649503310021b51e2f9";
export const url=new URL("../icons/bottom_drawer-fill.svg?v=0cd6fd6f05c49179b29a2d674f317b00f1bf81185ecc89204d37efea2c7f152c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
