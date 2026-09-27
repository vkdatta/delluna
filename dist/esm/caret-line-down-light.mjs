export const name="caret-line-down-light";
export const id="dl_388416dca2bd4c01b9c5";
export const url=new URL("../icons/caret-line-down-light.svg?v=4951d89fef14bb412172c30e9754b34cb56a79c0a71087b289665b0170e3cab7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
