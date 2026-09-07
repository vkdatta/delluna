export const name="television";
export const id="dl_3eb5f7c4ab294d3782df";
export const url=new URL("../icons/T/television.svg?v=db6c3b07832e504d5634abfacd740e8aa45358bfc29b884f3ffd6819ec3ed124",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
