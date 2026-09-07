export const name="warning-duotone";
export const id="dl_a614b7a77192411fa7ab";
export const url=new URL("../icons/W/warning-duotone.svg?v=5ae0c2cd3e764e0e82f03685657353b65499d6b231745af8516c140e8b1ba4af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
