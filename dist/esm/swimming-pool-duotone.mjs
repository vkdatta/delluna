export const name="swimming-pool-duotone";
export const id="dl_78f48f320534f7d349f8";
export const url=new URL("../icons/swimming-pool-duotone.svg?v=e58b5e1ad5ca0a72541e58651cdfb35b4e73a287c4944653980db91eafb7c9ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
