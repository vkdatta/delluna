export const name="fire-truck-light";
export const id="dl_5c9ece38de63427a8c2b";
export const url=new URL("../icons/fire-truck-light.svg?v=f65bc7a6074adc0b59f5f2ac4698c46b014c98d39e992c6ab79603f59527652f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
