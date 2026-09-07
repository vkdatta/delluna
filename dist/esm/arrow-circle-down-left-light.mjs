export const name="arrow-circle-down-left-light";
export const id="dl_ebaea866737c40de943c";
export const url=new URL("../icons/arrow-circle-down-left-light.svg?v=b55a7ac092af020d457a75c73cddb84a45ed7703d75315265f6868363c706536",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
