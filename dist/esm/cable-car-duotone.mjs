export const name="cable-car-duotone";
export const id="dl_3856b93396a046cdbb09";
export const url=new URL("../icons/cable-car-duotone.svg?v=0494690ee7c8f1aab06d0cc8ccc40915fe96bd869369aa5e6d949dc5b9192a75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
