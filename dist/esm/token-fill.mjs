export const name="token-fill";
export const id="dl_b1e2c80d89c372b292da";
export const url=new URL("../icons/token-fill.svg?v=1c1efef988e3d7230fcacc4ec7277c1dee41e7f82c99b257d6a190bd4c593005",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
