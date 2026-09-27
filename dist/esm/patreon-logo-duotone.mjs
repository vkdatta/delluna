export const name="patreon-logo-duotone";
export const id="dl_8ef3c2d530ad4c048fc7";
export const url=new URL("../icons/patreon-logo-duotone.svg?v=8829e91199a03933b3ff794fcc8f5e88f5f005b42e9f42cf69465d7252d34e3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
