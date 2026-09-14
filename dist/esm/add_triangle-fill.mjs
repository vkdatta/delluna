export const name="add_triangle-fill";
export const id="dl_0f8d867f8444481189fb";
export const url=new URL("../icons/A/add_triangle-fill.svg?v=d0108a1c964beecf4ba78d7f4aae6115b3139098ed97f382ca32687a01e469ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
