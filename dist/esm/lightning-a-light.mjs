export const name="lightning-a-light";
export const id="dl_d0b6537ef6154ac8995b";
export const url=new URL("../icons/lightning-a-light.svg?v=f659dcbb1d930f4f935028b3ae857edb076aa09a6c6c868f9b0357564184cb9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
