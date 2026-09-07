export const name="lucid_2-mail-minus";
export const id="dl_e3711150aefd4d59b6ea";
export const url=new URL("../icons/lucid_2-mail-minus.svg?v=e2b3301b379a7049a1d5d0077fa6e8213f6dacf39230ff14f091fce1257d22b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
