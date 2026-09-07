export const name="arrows-horizontal-duotone";
export const id="dl_642bce23dccc416f855b";
export const url=new URL("../icons/arrows-horizontal-duotone.svg?v=ec64ce796f1a8ed4b6d66167c0e8a477b4f0a8bdee21857a51b5df828054fe96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
