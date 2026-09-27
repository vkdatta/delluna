export const name="images-square-duotone";
export const id="dl_9b7a0891c619423ea4f0";
export const url=new URL("../icons/images-square-duotone.svg?v=e9153fa0266f5d5cf24d491ed96d5e60442a4703faf5e5eceebcbd400d7e5f19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
