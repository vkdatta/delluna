export const name="barricade-bold";
export const id="dl_9b4aea6410bc48daaf01";
export const url=new URL("../icons/barricade-bold.svg?v=e437c8a63d066b1d2f11e53b9ed97e41c2d7293eeb84de0914ffc42b7b8235d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
