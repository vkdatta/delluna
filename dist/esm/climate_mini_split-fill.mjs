export const name="climate_mini_split-fill";
export const id="dl_a3f830d1b3e56195e08f";
export const url=new URL("../icons/climate_mini_split-fill.svg?v=3cc80245fc8e04baa7551cd9ef2ccdd1250f9766a3b88e93edf028191879304b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
