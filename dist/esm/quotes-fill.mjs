export const name="quotes-fill";
export const id="dl_7b9f784f549e4c499669";
export const url=new URL("../icons/quotes-fill.svg?v=ec8c9467a9af45e343153d1671ebb6f0d6ecea20d9994c0f635481059651a9a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
