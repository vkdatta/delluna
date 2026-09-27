export const name="text-h-one-duotone";
export const id="dl_ec06692f4988f69253d4";
export const url=new URL("../icons/text-h-one-duotone.svg?v=cc5059429b08a09702c64cdc01b8174136928b48a508573aff5e3748ee94a1fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
