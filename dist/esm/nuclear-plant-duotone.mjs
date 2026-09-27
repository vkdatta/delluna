export const name="nuclear-plant-duotone";
export const id="dl_472c5ed8d7ba4a37b820";
export const url=new URL("../icons/nuclear-plant-duotone.svg?v=c1f9d865ec30bd16f49b63e7a316e4523a4864bfe0613e2c2c492fba32b7af7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
