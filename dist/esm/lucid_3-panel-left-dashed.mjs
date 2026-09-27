export const name="lucid_3-panel-left-dashed";
export const id="dl_79e64147dab54fa1a2e8";
export const url=new URL("../icons/lucid_3-panel-left-dashed.svg?v=6f5cf45e0ca626b9680ae7ecf804fda9595476a60291d2cfc00f066c3302e78d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
