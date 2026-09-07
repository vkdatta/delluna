export const name="magnifying-glass-plus-thin";
export const id="dl_ef59d031916940ecbb8f";
export const url=new URL("../icons/magnifying-glass-plus-thin.svg?v=82db71568b011808de9ac2685894e042fc7ae88311eca84f20bb159a3d9f3b50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
