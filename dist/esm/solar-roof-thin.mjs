export const name="solar-roof-thin";
export const id="dl_920fc6c511ea487bab94";
export const url=new URL("../icons/S/solar-roof-thin.svg?v=30aee1b9e0ee5682f17676f7269a256c2a1ddd8966c027581a83a9de127138ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
