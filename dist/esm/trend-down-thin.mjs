export const name="trend-down-thin";
export const id="dl_789da303804526b4eaa8";
export const url=new URL("../icons/trend-down-thin.svg?v=90c9b086ada228401edc20e188186a73e1e42699bb190d9b61ab251f294f0cbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
