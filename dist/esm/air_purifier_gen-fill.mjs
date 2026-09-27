export const name="air_purifier_gen-fill";
export const id="dl_c3f2be33cb52df3c825b";
export const url=new URL("../icons/air_purifier_gen-fill.svg?v=886902c2fe8446cd35530a2d7c64154853e3af9e1db1d6631cd4af011eecaa1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
