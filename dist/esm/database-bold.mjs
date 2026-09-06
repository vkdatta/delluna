export const name="database-bold";
export const id="dl_bea5ab645f774634a484";
export const url=new URL("../icons/database-bold.svg?v=f0b769c621d9263dbea9122d65188224be8474f6b124dac06a485eec83dd2bce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
