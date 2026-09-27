export const name="microscope-bold";
export const id="dl_a914e78a538c45b4a0d8";
export const url=new URL("../icons/microscope-bold.svg?v=fc6e8e85f1f9715ece0e832eb6624d6c2c48e8ffda146fb89a02c021e697e8f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
