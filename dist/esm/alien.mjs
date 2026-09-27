export const name="alien";
export const id="dl_1b162916722a496db308";
export const url=new URL("../icons/alien.svg?v=bc6cd47267adca39e978e298c34c0505545314e04b4c67545009552a6cd7713e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
