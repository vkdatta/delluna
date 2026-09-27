export const name="language_international-fill";
export const id="dl_29391147710b73110e76";
export const url=new URL("../icons/language_international-fill.svg?v=12f056c57ffa2400d4eb60684d75060bf954c5f396ca97f947d04caf643b39f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
