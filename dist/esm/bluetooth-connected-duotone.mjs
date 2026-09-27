export const name="bluetooth-connected-duotone";
export const id="dl_3e460abea9ef49c6afd3";
export const url=new URL("../icons/bluetooth-connected-duotone.svg?v=922d276cda19774e4ad902a1ea2e850045b97ad6f56db5bf8b9582e08c9c54fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
