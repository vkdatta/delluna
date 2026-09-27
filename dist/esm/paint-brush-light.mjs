export const name="paint-brush-light";
export const id="dl_f9f020bfda2b469291b3";
export const url=new URL("../icons/paint-brush-light.svg?v=252a7ef1e5e1b6f2663bcc0343520f3d72533669b06dab62c1002eb714e4fe86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
