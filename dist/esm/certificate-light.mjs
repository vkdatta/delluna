export const name="certificate-light";
export const id="dl_bc52a9ddffa54f3d8d1a";
export const url=new URL("../icons/certificate-light.svg?v=93b5db3fe704be7a2cd76d2f84cb6efc55213092ccfac07e1928cf562be58e6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
