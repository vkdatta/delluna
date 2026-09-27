export const name="package-bold";
export const id="dl_558cc23bab7441e79a3b";
export const url=new URL("../icons/package-bold.svg?v=5f0d417576250e3d7fcc5a8b6efae86f3974cbfaad18d8d2dadffd8a93c1388d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
