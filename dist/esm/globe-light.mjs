export const name="globe-light";
export const id="dl_417744cf073e4d89a239";
export const url=new URL("../icons/globe-light.svg?v=408ea9110264d32b17a930933e77414dc64f937cbdfccb79021dadcf2c635cc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
