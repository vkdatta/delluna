export const name="lucid_1-container";
export const id="dl_3ce83f39d5fd40b991f7";
export const url=new URL("../icons/lucid_1-container.svg?v=f50018eaa044ce6e26e54d8e572a96768c5c25af91b75a026c89a1089874ed54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
