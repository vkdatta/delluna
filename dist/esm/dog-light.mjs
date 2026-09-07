export const name="dog-light";
export const id="dl_e35c8fcda66f4ca38e58";
export const url=new URL("../icons/dog-light.svg?v=30f38570adcaff70f12181019b8781c221086083ffe3688809106c8de268b179",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
