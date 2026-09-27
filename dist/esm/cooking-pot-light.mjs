export const name="cooking-pot-light";
export const id="dl_bd64f3e79ffa45e785c0";
export const url=new URL("../icons/cooking-pot-light.svg?v=0acc56294c2bdad6a823c2ea771b5c8b93185737bc20af137349a65abe616956",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
