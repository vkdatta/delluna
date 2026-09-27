export const name="caret-circle-double-down-duotone";
export const id="dl_7ff24c8c5e3a47c49378";
export const url=new URL("../icons/caret-circle-double-down-duotone.svg?v=38a799976123084914d54304ef3d9a60264a98b08e4d8609957b1614339ab0af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
