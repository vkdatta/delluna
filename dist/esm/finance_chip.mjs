export const name="finance_chip";
export const id="dl_e392246de257ac7e1176";
export const url=new URL("../icons/finance_chip.svg?v=ac1c7c680b51b2f9d9ae0996cb20e1bee1ae967f3d09659e2fc218a1e31fcd79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
