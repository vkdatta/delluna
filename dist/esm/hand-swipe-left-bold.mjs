export const name="hand-swipe-left-bold";
export const id="dl_3b06ce08f0fc47e0add3";
export const url=new URL("../icons/hand-swipe-left-bold.svg?v=15a1e117e2eaedb1ce28593056e6bb3d7ad350560314bfc9262135b0b11dd131",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
