export const name="fire-fill";
export const id="dl_84109c3827df4c32a62f";
export const url=new URL("../icons/fire-fill.svg?v=512355fb2a156f0c39485a28bc6f81cf1df3de35faed9c5ad62c30cec5d8d63c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
