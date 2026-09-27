export const name="soccer-ball-duotone";
export const id="dl_a488563207ee604afad3";
export const url=new URL("../icons/soccer-ball-duotone.svg?v=5745de627eddb27477a060907cd84f8efd94ebe0aa85c7706676f57d2573683d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
