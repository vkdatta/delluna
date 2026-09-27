export const name="currency-btc-light";
export const id="dl_ab032de94de0480090c3";
export const url=new URL("../icons/currency-btc-light.svg?v=b5620057f7f6eb30fe35159fb9d09800ec4ecb33dfa15d2367cf2994f53dd004",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
