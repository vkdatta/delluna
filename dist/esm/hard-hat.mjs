export const name="hard-hat";
export const id="dl_a7be3ed83f224ac0858d";
export const url=new URL("../icons/hard-hat.svg?v=d1d397967e30657f38e96ee870d472b31bd7e574f04e9ce7dd00b9ecdba82ac1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
