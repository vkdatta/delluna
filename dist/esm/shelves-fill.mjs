export const name="shelves-fill";
export const id="dl_749000e38683ec9d4610";
export const url=new URL("../icons/shelves-fill.svg?v=84d930488ff690010bb4eab6e1978e88fa9c3c674e490a19c1fdd680910aa1cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
