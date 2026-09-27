export const name="tree-light";
export const id="dl_554ab25ff89a6977b7a9";
export const url=new URL("../icons/tree-light.svg?v=12638499440dc97f2ca1aa723fc0514d8d22fe1cb969440ea8a603bc7904a0eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
