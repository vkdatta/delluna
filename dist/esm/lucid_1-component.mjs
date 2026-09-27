export const name="lucid_1-component";
export const id="dl_05cd6b370bb24edc8ba3";
export const url=new URL("../icons/lucid_1-component.svg?v=4a225b7707657cb386b96408d3f52c1e2b984445e54c613dfb62bafe30a55d46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
