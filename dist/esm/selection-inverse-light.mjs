export const name="selection-inverse-light";
export const id="dl_3adc3bcee0434fdd82bf";
export const url=new URL("../icons/S/selection-inverse-light.svg?v=4392e461e4b4c3739c63273577e16f241822fc4dbae94cd02ec30d2b1369ba4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
