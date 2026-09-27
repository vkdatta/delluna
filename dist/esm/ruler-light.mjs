export const name="ruler-light";
export const id="dl_ad4b39e168324e908844";
export const url=new URL("../icons/ruler-light.svg?v=25fa04f6f876a8b794611cd49268006f53071aaa26a74edd680895f3d8a72475",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
