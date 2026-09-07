export const name="shield-fill";
export const id="dl_e227e537646242028516";
export const url=new URL("../icons/S/shield-fill.svg?v=799e2b0224cb1bdcd2b228609c0494e2e4e4e74a59df92612499803bd7090f9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
