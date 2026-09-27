export const name="g_translate-fill";
export const id="dl_f54d6283d212f122e6ae";
export const url=new URL("../icons/g_translate-fill.svg?v=fe11d969033295c7c1944225de23ffae009fe4cc1e50e5ef32a4a2cf67365583",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
