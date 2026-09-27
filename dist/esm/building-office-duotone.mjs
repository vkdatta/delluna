export const name="building-office-duotone";
export const id="dl_6cd24ae5fe2a4eb6827a";
export const url=new URL("../icons/building-office-duotone.svg?v=5566e3993964222dc5c5468c7183eeb9aa6c6a2aeab7a436f193450cc31e98c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
