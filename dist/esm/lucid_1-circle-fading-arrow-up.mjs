export const name="lucid_1-circle-fading-arrow-up";
export const id="dl_5e809ce5532340b5bc85";
export const url=new URL("../icons/lucid_1-circle-fading-arrow-up.svg?v=da1300420ac89d3e1348fae7ea81aee3af82595f305949300ce032d361c062ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
