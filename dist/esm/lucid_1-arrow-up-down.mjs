export const name="lucid_1-arrow-up-down";
export const id="dl_8ee503819d104e9e8572";
export const url=new URL("../icons/lucid_1-arrow-up-down.svg?v=5b78296c42186d18e779141ace5422c85a17becbc522da9675476de05abf2561",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
