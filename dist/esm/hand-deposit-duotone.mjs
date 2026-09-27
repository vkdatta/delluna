export const name="hand-deposit-duotone";
export const id="dl_cab46e0433104479b211";
export const url=new URL("../icons/hand-deposit-duotone.svg?v=f6687daec0f6fd7d4286d070ff740221bf2262188f35484d089c70b2b8858a79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
