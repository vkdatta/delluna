export const name="hourglass-low-light";
export const id="dl_4b6cc5d595db4e3f976a";
export const url=new URL("../icons/hourglass-low-light.svg?v=25da58a9075961f59cd9f681c47cf5d5062c124ba1f53c0b505080a3a8db2b6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
