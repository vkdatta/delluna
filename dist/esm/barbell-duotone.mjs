export const name="barbell-duotone";
export const id="dl_35e2a6c5c7b441809730";
export const url=new URL("../icons/barbell-duotone.svg?v=45f110f5803913a9c4bda5d7df76fb7598575756e612948dd1570adff6494321",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
