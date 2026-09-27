export const name="list_arrow-fill";
export const id="dl_3bef13887168794e37c9";
export const url=new URL("../icons/list_arrow-fill.svg?v=0c40a06e55f2dc8b3aa449ca8727cfd71c531e09b32b0057abb442574fca669f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
