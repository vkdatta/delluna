export const name="phone-pause-bold";
export const id="dl_238d31f20362486fab98";
export const url=new URL("../icons/phone-pause-bold.svg?v=8422b55a626eabcd679cdcd068cb11be3406cba9f462b97c1505dc131abcccff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
