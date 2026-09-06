export const name="lucid_3-package-x";
export const id="dl_92582cd8d718479c98bb";
export const url=new URL("../icons/lucid_3-package-x.svg?v=e20a90e4a94503b181413d7bca18b4d026589aca40a0ba22c91d565b243df0c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
