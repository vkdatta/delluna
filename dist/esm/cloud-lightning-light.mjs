export const name="cloud-lightning-light";
export const id="dl_9195e24d8f5f4a488269";
export const url=new URL("../icons/cloud-lightning-light.svg?v=87a6be606509cfd89a818ab2cfbf7cd2b545dad82ebd941cf558dfd36e7da828",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
