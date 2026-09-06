export const name="escalator-up-light";
export const id="dl_36d96eccf334441f91e1";
export const url=new URL("../icons/escalator-up-light.svg?v=c0949068c983defd625a4e0748d09dcaadf5a85a47e0adb1cee048f052e3410d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
