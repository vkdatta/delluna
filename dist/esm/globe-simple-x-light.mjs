export const name="globe-simple-x-light";
export const id="dl_861459b19b8545d891e5";
export const url=new URL("../icons/globe-simple-x-light.svg?v=702aaec9c981114861288ff86a0fab8f9bf262428c1e3337ca92fd9034368ad9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
