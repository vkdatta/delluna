export const name="quick_reorder-fill";
export const id="dl_1f9b3db4c2066d7e4a4c";
export const url=new URL("../icons/quick_reorder-fill.svg?v=314bedb7b2b8a8cdcfa90f599742757bc06ab57a68ffc1e26220eff2e4535b6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
