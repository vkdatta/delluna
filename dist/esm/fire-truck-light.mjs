export const name="fire-truck-light";
export const id="dl_5c9ece38de63427a8c2b";
export const url=new URL("../icons/fire-truck-light.svg?v=2e90bcd1e7356d123989ce49a22e09c037cbcf88f5fad9d35e2e0246a61b62e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
