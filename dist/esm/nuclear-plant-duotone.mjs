export const name="nuclear-plant-duotone";
export const id="dl_472c5ed8d7ba4a37b820";
export const url=new URL("../icons/nuclear-plant-duotone.svg?v=8c4aca24f3881d89e7cb057f3c130a40bedeffa5e41c28450f2ee74bdf267b33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
