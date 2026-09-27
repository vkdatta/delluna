export const name="arrow-circle-down-right-duotone";
export const id="dl_0ba6300a803440bb8805";
export const url=new URL("../icons/arrow-circle-down-right-duotone.svg?v=6b0786a09004b82007bd6084252ab84e4b913de5c05d7de4a938d8e92dd4ceaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
