export const name="bug-beetle-duotone";
export const id="dl_762ab8fdb67f483baee0";
export const url=new URL("../icons/bug-beetle-duotone.svg?v=2e17b4f9130b2819e2e6518eb2497abded0f3728f97afbfddb967965b729824f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
