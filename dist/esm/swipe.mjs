export const name="swipe";
export const id="dl_457df47db0cd1795f43f";
export const url=new URL("../icons/swipe.svg?v=2464f6ffbce65a07564168d538252fc4a1fe02fb60296fd7a0994ef7c1603cdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
