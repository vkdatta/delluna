export const name="number-six";
export const id="dl_167840c292674ce9aa5b";
export const url=new URL("../icons/number-six.svg?v=660facd136b2f8ca2b80a8e82373aa0be9885218b15364cad6878c9444e0c622",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
