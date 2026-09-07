export const name="lucid_3-shield-minus";
export const id="dl_e71b9d685ade479b823b";
export const url=new URL("../icons/lucid_3-shield-minus.svg?v=a2b54e04d14142c11d13fdd0b2898dd7824ba30ef1645c0609bd7b7675dc4552",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
