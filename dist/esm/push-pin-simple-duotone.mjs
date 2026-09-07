export const name="push-pin-simple-duotone";
export const id="dl_3c4bac22ea364cf68f04";
export const url=new URL("../icons/push-pin-simple-duotone.svg?v=cc31ea4345923ace7b5c471cb21c01895d767b5cd9a5e29fb224d817f2f3e314",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
