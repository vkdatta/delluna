export const name="local_pizza-fill";
export const id="dl_5603068c59b96ef47ebe";
export const url=new URL("../icons/local_pizza-fill.svg?v=0e14d03368e60fe50bbbf37b2d9053bcb9a260b7af4b0465bb27d07f33c912cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
