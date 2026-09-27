export const name="hard-hat";
export const id="dl_a7be3ed83f224ac0858d";
export const url=new URL("../icons/hard-hat.svg?v=ec3df9bbece4797150bb912f8b682d5810d0b88f44c544e79ca980b612aaa744",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
