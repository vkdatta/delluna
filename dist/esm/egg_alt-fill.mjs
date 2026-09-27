export const name="egg_alt-fill";
export const id="dl_213a47b76b32b2e450c0";
export const url=new URL("../icons/egg_alt-fill.svg?v=8ec9c73e96dee3925d843f0de5c7aa3e8eab930dc3b1b9003059854b9c095cd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
