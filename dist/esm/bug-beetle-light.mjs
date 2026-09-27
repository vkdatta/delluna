export const name="bug-beetle-light";
export const id="dl_9c5bae34cd02421e82bb";
export const url=new URL("../icons/bug-beetle-light.svg?v=ccb15526454b081dd8d33bc2604a83cde26571a2a553ab6024ed032a1be6b954",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
