export const name="speaker-simple-none-fill";
export const id="dl_cd11fed40865cffca9f9";
export const url=new URL("../icons/speaker-simple-none-fill.svg?v=dc9bce65b00e6aa05523b345b4c02ba7ea6c5d7752920a89b327baa2f57b071c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
