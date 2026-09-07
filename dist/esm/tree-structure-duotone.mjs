export const name="tree-structure-duotone";
export const id="dl_e1b88048bb0f4c769a57";
export const url=new URL("../icons/T/tree-structure-duotone.svg?v=576f858cd9a82372aa845dd98ca00ef37cd4cf72e518399554fee4177ddd3814",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
