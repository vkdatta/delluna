export const name="vr180_create2d";
export const id="dl_47f241743590e1077962";
export const url=new URL("../icons/vr180_create2d.svg?v=fbf67ed8324e3afecfaa2f0d617cfb7093d09fe250951e5977a27a1b1fa5ccf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
