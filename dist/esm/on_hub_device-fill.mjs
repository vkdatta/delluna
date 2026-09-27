export const name="on_hub_device-fill";
export const id="dl_ff426d8952b27f22540c";
export const url=new URL("../icons/on_hub_device-fill.svg?v=110115aa28bc81e65bafcb825fc14607f8045150187e7c70faadb81ab0c9f478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
