export const name="potted-plant-duotone";
export const id="dl_0caff1ed4a1d454f8317";
export const url=new URL("../icons/potted-plant-duotone.svg?v=616add1a8404251d8085034a0dc8bf8eac454fca40a78508933884b3f477ad8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
