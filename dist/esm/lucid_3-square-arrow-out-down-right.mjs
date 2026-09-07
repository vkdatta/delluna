export const name="lucid_3-square-arrow-out-down-right";
export const id="dl_257f6bda913e4ef9a08e";
export const url=new URL("../icons/lucid_3-square-arrow-out-down-right.svg?v=e24e0ff6c2f75ba1baec85fcaaae24f5b3ba8d49944296e16d036e93bdfb39de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
