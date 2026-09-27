export const name="lucid_1-circle-gauge";
export const id="dl_98fcfff312d34d87b4ca";
export const url=new URL("../icons/lucid_1-circle-gauge.svg?v=9f5091a711a361e1f5c4ead8fb22e479b1f300c8f5bc324ece72e71564f8fe47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
