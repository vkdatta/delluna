export const name="intersect-square-fill";
export const id="dl_0f65004866e1489589e2";
export const url=new URL("../icons/intersect-square-fill.svg?v=53e5c1fc1027cf89011854680cf727aea27d4c2ccafdea7da6f3bdb5ef63ec52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
