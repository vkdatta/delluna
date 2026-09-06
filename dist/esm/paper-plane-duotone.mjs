export const name="paper-plane-duotone";
export const id="dl_41dbb935526f4a9fa8e3";
export const url=new URL("../icons/paper-plane-duotone.svg?v=cb34d55867dfaa848cccbbe0a6c4a220b6e2e5aa678b9ae2afa5abeff6748574",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
