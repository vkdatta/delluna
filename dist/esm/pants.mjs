export const name="pants";
export const id="dl_1c2ef596987147bda71b";
export const url=new URL("../icons/pants.svg?v=f09e7226441dfbb0a36ada3b6b9c791cbc6722efcf4b15eccbd514fe7d6ef057",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
