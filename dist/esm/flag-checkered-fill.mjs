export const name="flag-checkered-fill";
export const id="dl_8b9b2948e30f48d89439";
export const url=new URL("../icons/flag-checkered-fill.svg?v=649ff4e9e383da2e1d4667e6b29c59360b412f804db8cd7298ef941da0fd17c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
