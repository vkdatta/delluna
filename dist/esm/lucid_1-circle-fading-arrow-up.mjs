export const name="lucid_1-circle-fading-arrow-up";
export const id="dl_5e809ce5532340b5bc85";
export const url=new URL("../icons/lucid_1-circle-fading-arrow-up.svg?v=ab137cbcb827ac94d19cf50aed184b21fcee89ada44e62e5767491ba041f8df2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
