export const name="shield-checkered-duotone";
export const id="dl_1e2bb67c36aa45f58af3";
export const url=new URL("../icons/S/shield-checkered-duotone.svg?v=a670ce7867db48891f44c571f7bb9275a2647bc7d8afd5f140ffaa8307da2780",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
