export const name="humidity_indoor";
export const id="dl_98af12a1b5bb081376e7";
export const url=new URL("../icons/humidity_indoor.svg?v=da8ca8e817972c8294eb1cceb0849f59d09bbee87b0cb50ae85f442cea08a6cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
