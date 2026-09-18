export const name="near_me_disabled";
export const id="dl_212dfcb4aab948a2b8e4";
export const url=new URL("../icons/near_me_disabled.svg?v=07267920b7164336544853bd96ec94453e211522c696124e18e682f00b0be8e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
