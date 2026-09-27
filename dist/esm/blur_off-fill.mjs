export const name="blur_off-fill";
export const id="dl_434431f4d4fcea0f0862";
export const url=new URL("../icons/blur_off-fill.svg?v=229ec556ac1adc9ff6541232b04a45453d5f4255bb5c865b563a0d8a0bfffd97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
