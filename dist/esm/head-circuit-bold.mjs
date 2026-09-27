export const name="head-circuit-bold";
export const id="dl_95c468c7fa0048399434";
export const url=new URL("../icons/head-circuit-bold.svg?v=25ab2d41bad171083dc6f8012139479b2fa696ba1533af5bf1c4269ffce5f4ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
