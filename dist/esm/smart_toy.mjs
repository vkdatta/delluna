export const name="smart_toy";
export const id="dl_548a5b214fa6a7dfe372";
export const url=new URL("../icons/smart_toy.svg?v=0736a2029e0c936f35d4508ae4b1693f86f8838b33d44bdbb22bd83e168fa038",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
