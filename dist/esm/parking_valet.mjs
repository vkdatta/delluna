export const name="parking_valet";
export const id="dl_6255611fbf94448dba49";
export const url=new URL("../icons/parking_valet.svg?v=f1f08b5f640b65f06d04bcbcea3090b6ee99293f46a9a11606eef80209ae807d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
