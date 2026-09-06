export const name="jar-label-bold";
export const id="dl_4f3e06d9544e498ebed7";
export const url=new URL("../icons/jar-label-bold.svg?v=b045a8e300b8ae248efa360b26c24292ccc7043f9143abc2ce2f3b8beeaf5d83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
