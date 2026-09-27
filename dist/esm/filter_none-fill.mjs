export const name="filter_none-fill";
export const id="dl_dc747eb17bd1b91a1198";
export const url=new URL("../icons/filter_none-fill.svg?v=e981b17c03e296208e2de11761f437b21c7216943cfdf62446f6a12ead928f2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
