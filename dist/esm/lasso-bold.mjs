export const name="lasso-bold";
export const id="dl_a9e3aa18815e443fb779";
export const url=new URL("../icons/lasso-bold.svg?v=593e8ed02ecc2e37648cd56a74114e3f4704846602855b41fd025932616a939c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
