export const name="beach_access";
export const id="dl_bbb33faa4a5ff4731087";
export const url=new URL("../icons/beach_access.svg?v=cc3adc2b26ac32e0cf1416691af6a209e1c35c7d17296de871f0bd45e13036dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
