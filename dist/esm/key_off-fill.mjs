export const name="key_off-fill";
export const id="dl_59659c6bb71b33f58a22";
export const url=new URL("../icons/key_off-fill.svg?v=185d1bc8906d32951157a03246ae599ffb0f16bf018b1cc25d79445f983954dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
