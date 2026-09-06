export const name="currency-cny-duotone";
export const id="dl_759c78a92e744a43a9af";
export const url=new URL("../icons/currency-cny-duotone.svg?v=e62ffcbddb9796724da33b045a6418c15bc3a18b19f3e72679cfad2fe86b6746",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
