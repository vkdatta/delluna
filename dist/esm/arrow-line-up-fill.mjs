export const name="arrow-line-up-fill";
export const id="dl_cda162d456264d399575";
export const url=new URL("../icons/arrow-line-up-fill.svg?v=e30011f27a88722efe64b24b0a21842a85596c93cf13b34cdabfd554904afbdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
