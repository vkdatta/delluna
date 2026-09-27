export const name="lightning-a-light";
export const id="dl_d0b6537ef6154ac8995b";
export const url=new URL("../icons/lightning-a-light.svg?v=5191c293ac243b9b55a6d130f3876bf0a2beb2523971e033be3007ec1d874048",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
