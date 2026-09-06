export const name="infinity-thin";
export const id="dl_7d37b46e6d3149228b8e";
export const url=new URL("../icons/infinity-thin.svg?v=cfa2708c107e05777c7faf7ac315cb497f5c59310055d25c3cfcfec35a8845b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
