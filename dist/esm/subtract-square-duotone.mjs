export const name="subtract-square-duotone";
export const id="dl_b155b1dd4794a17e7828";
export const url=new URL("../icons/subtract-square-duotone.svg?v=51059f898d4f59924498aca34dfa0ffe5d573d5ba453454cfb57edfd587385d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
