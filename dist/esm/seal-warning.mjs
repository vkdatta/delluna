export const name="seal-warning";
export const id="dl_c1cd7882d3044f5da36a";
export const url=new URL("../icons/S/seal-warning.svg?v=459ab9884488de7aba52602e265b0102a97dddb6f0b8817e0064c38cf15b6f8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
