export const name="treasure-chest-duotone";
export const id="dl_2ca304342e23bf2ae743";
export const url=new URL("../icons/treasure-chest-duotone.svg?v=590c9a8d258a196c885a752a22b967388819b7dd3d82e0b49f3791731dee22e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
