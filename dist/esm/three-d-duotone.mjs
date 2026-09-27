export const name="three-d-duotone";
export const id="dl_64da56ca4e0fa7771b60";
export const url=new URL("../icons/three-d-duotone.svg?v=9764687dab2b8d083575ecc3152202a8d7ef28891918152aa119e8d986f1cc75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
