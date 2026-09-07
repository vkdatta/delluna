export const name="gear";
export const id="dl_2a0043b2536d44d9af1d";
export const url=new URL("../icons/gear.svg?v=5c0cb3ba307c72babf78d952d9140c682ff30307fedc7fbb87c9a293c1e2fd64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
