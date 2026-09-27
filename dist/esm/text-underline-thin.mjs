export const name="text-underline-thin";
export const id="dl_1e60b05dbe67c8900bc9";
export const url=new URL("../icons/text-underline-thin.svg?v=c594de0c6278d2d95f17c677682bc7f8add2f9b49c1ca6d4519d0ea3c3e18b96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
