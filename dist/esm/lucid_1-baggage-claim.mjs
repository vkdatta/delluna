export const name="lucid_1-baggage-claim";
export const id="dl_25f4ae3598cb4ee2948d";
export const url=new URL("../icons/lucid_1-baggage-claim.svg?v=af1d4e0b23f7c76ad626822c69755770559b3ea3059f07e0817d5c88f0df0bbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
