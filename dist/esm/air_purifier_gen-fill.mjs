export const name="air_purifier_gen-fill";
export const id="dl_c36149f54dd4ce88a799";
export const url=new URL("../icons/air_purifier_gen-fill.svg?v=79a94a13a1e361f6531de0dd5fc7899e4386fa006c0c23ef82b77818361d6924",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
