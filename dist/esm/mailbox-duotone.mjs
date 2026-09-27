export const name="mailbox-duotone";
export const id="dl_a8bd1c10c8f7468ea3c6";
export const url=new URL("../icons/mailbox-duotone.svg?v=c00d97b971bfc231d6e355ff2faa9046992aad681081d2a7daab8a6b5e0d309d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
