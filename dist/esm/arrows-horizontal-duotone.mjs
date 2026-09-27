export const name="arrows-horizontal-duotone";
export const id="dl_642bce23dccc416f855b";
export const url=new URL("../icons/arrows-horizontal-duotone.svg?v=1b0f466a49016ee469239c896a25149612e5fa923344f6d7d61e6f5c5fbaf8ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
