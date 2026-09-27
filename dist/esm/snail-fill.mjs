export const name="snail-fill";
export const id="dl_0d1097435f04463d76d7";
export const url=new URL("../icons/snail-fill.svg?v=a122603375e22e83f4c6380f3f6186c91f680e23aec4e57b7f4105a76ade01af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
