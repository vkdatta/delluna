export const name="credit-card-thin";
export const id="dl_9491f9ec7308426c8ccf";
export const url=new URL("../icons/credit-card-thin.svg?v=e5494452f326e8b5c3e3074a909d3e7019966f39e704c71663fa58ae73e913ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
