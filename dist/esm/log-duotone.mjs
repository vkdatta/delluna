export const name="log-duotone";
export const id="dl_6f422cde8c4641af906d";
export const url=new URL("../icons/log-duotone.svg?v=d979c1f73546d95e60ac51c3324a2a68af0b74711061d5bb027da9036519ad1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
