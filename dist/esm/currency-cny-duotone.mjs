export const name="currency-cny-duotone";
export const id="dl_759c78a92e744a43a9af";
export const url=new URL("../icons/currency-cny-duotone.svg?v=5ee00a47d952873b42e0e43454ff6ac10771820daae48f05fbb1284d291638e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
