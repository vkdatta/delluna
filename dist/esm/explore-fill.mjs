export const name="explore-fill";
export const id="dl_a69f9decaa83f90eecf5";
export const url=new URL("../icons/explore-fill.svg?v=abac09eda2093baa1d5ca2488d3f6be93753c782dcc248b027ae951a4b1a53a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
