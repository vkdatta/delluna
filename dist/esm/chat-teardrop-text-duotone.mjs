export const name="chat-teardrop-text-duotone";
export const id="dl_e551a3399bdf463d849f";
export const url=new URL("../icons/chat-teardrop-text-duotone.svg?v=b7e29693bce3609cdb3dd188b34437bc428b7cb22e6cc4e959556f619e0e8a2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
