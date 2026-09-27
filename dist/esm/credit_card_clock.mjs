export const name="credit_card_clock";
export const id="dl_110b955b5162f9aa0f82";
export const url=new URL("../icons/credit_card_clock.svg?v=3393c4355f2a35854497d60982edebb29305ef8887a9bc35c81bba6d9b007426",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
