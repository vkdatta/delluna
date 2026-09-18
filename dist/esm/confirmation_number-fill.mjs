export const name="confirmation_number-fill";
export const id="dl_707a83ddfe3d44648f92";
export const url=new URL("../icons/confirmation_number-fill.svg?v=6e6ed384ba3aff3bd0c25a73ae0130e61257fd4635f108c8743822327eeea211",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
