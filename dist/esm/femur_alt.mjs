export const name="femur_alt";
export const id="dl_1a673bc9e75997f2d1a5";
export const url=new URL("../icons/femur_alt.svg?v=91c1b882c7925d0e0a79be39609ef32577588a8563988924091fc5f0e1f8f743",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
