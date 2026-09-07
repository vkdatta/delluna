export const name="chart-pie-slice";
export const id="dl_81d152f5783d4e36b5c0";
export const url=new URL("../icons/chart-pie-slice.svg?v=42f3c6d54f8d6709fe5c9452e1b53fdb3d55a48257fd4dfa9c9e547d12abeeb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
