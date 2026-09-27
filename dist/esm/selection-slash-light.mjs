export const name="selection-slash-light";
export const id="dl_44915a0e47b70f90f1c8";
export const url=new URL("../icons/selection-slash-light.svg?v=4801b7c5299d2da452863497c85bbf86ae7cb8a4876f284bce8c760a6228248e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
