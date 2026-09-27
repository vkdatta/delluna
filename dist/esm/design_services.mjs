export const name="design_services";
export const id="dl_a67c703acc100a150fde";
export const url=new URL("../icons/design_services.svg?v=79d741f74759ec95d5231ff33da4321904c4b4dbef24c52ad44e7aca5480ea9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
