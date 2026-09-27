export const name="contact_emergency-fill";
export const id="dl_381e74abb86fde530fa1";
export const url=new URL("../icons/contact_emergency-fill.svg?v=fb5fdc7663ade45e49e82a0986503ce4d86fbb07751fc73a3fd6d53c4d5072c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
