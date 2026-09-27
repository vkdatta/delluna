export const name="crop_16_9-fill";
export const id="dl_b987a8a2e2ad6bae2f36";
export const url=new URL("../icons/crop_16_9-fill.svg?v=aad16a91297826ed2e7d0adf4a166a8e7f762dd7e3476c8b1b0d62411755e27e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
