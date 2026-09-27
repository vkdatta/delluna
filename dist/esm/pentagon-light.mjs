export const name="pentagon-light";
export const id="dl_782d200c2bc847c09678";
export const url=new URL("../icons/pentagon-light.svg?v=73da8d5163d2ae6c8bfd1dc24d12ec317911183a1480402e86ef444c8c5b24d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
