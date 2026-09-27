export const name="sun-horizon-light";
export const id="dl_56024853d6ceac7f4298";
export const url=new URL("../icons/sun-horizon-light.svg?v=4b81b248251bfcd4f20d9a1dfde3e5c54bdcf00b1c2df8fbc72fc14e9e3adddd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
