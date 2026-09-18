export const name="bath_private-fill";
export const id="dl_af30841dd1ba4d348357";
export const url=new URL("../icons/bath_private-fill.svg?v=dd62017f3e4ccf5e33a7bd446dccfefa89fd000e5cf3288b17780fd643588b4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
