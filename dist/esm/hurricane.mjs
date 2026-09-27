export const name="hurricane";
export const id="dl_77814b805ea54dba9dd9";
export const url=new URL("../icons/hurricane.svg?v=408ece259f634eff934f127afaada5073064641724541130ae584c3cba086748",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
