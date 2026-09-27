export const name="atom-duotone";
export const id="dl_995ca1ac1bf3447c8fae";
export const url=new URL("../icons/atom-duotone.svg?v=a3fa16ebc6a98a73849c35a5f3143427887bfa34aebefd91ca8aebc4d6706e46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
