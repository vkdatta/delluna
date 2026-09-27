export const name="update";
export const id="dl_bf45e75699d10d6cc65a";
export const url=new URL("../icons/material_symbols/update.svg?v=ccf75ab3437124de35e61b8d41ec7a3c07e9f297809aad4a333d896ff6a8f3b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
