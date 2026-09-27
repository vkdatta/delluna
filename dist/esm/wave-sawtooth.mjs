export const name="wave-sawtooth";
export const id="dl_4b19c627450edb12008e";
export const url=new URL("../icons/wave-sawtooth.svg?v=3b182461c0d9a59bf7e963686d9529cbd265103dbe011128163d00a9cca06a9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
