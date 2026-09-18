export const name="humidity_high";
export const id="dl_cb5c8eec45d541d28a55";
export const url=new URL("../icons/H/humidity_high.svg?v=faed4677c7b65405f268f772d88f7af218e142ae53817fb52e099efea23b52c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
