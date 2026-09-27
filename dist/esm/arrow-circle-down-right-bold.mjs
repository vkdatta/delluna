export const name="arrow-circle-down-right-bold";
export const id="dl_c92a40858ad04f7ebbf7";
export const url=new URL("../icons/arrow-circle-down-right-bold.svg?v=bbd80a01523c4434eba5f73ed98dc3460cc0562da53fcec8ba1180ee2f396577",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
