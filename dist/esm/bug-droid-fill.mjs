export const name="bug-droid-fill";
export const id="dl_709ffbb9c047418f9e50";
export const url=new URL("../icons/bug-droid-fill.svg?v=52363a610a7d9c90dc3221058b350eb2c05b641d9eb67dc7fdd4411df0555cf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
