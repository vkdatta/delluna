export const name="precision_manufacturing-fill";
export const id="dl_b380531c1173de8a6c39";
export const url=new URL("../icons/precision_manufacturing-fill.svg?v=cbcb9485206fa828c7ee069d3997cbbd50d7faaafc64da32793a49b7a964a571",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
