export const name="wave-sine-thin";
export const id="dl_9dc1bd5e500682e48cb6";
export const url=new URL("../icons/wave-sine-thin.svg?v=2ced9cd559f2b005b1273641c656cd0b941ab86a30f2a5854df104677e920840",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
