export const name="medal-military-bold";
export const id="dl_5cf1d3a93e74491490bf";
export const url=new URL("../icons/medal-military-bold.svg?v=ec041986a713e0c75080a4738ba2e575fa65ebe522a9c8587d962d5f00f3b926",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
