export const name="ambulance-thin";
export const id="dl_5d6bfd22cb71447f907f";
export const url=new URL("../icons/ambulance-thin.svg?v=396d82548541223de62374d25278cfac0e0f6512b4f54ace26d3e45aa0e2442e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
