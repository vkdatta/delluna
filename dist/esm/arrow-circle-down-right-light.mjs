export const name="arrow-circle-down-right-light";
export const id="dl_6682a051e3f547fcadf5";
export const url=new URL("../icons/arrow-circle-down-right-light.svg?v=2399c311298c43eca8ac74fe5ea513d9c2ba386d125e525399cace9f11d90a92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
