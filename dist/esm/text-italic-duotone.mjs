export const name="text-italic-duotone";
export const id="dl_80b6a751a60343b986bf";
export const url=new URL("../icons/T/text-italic-duotone.svg?v=4feaea6f92f1a2b3bb494cb7a377c5618191c0d9c5cc991fd6dd6a6d8b5d8f24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
