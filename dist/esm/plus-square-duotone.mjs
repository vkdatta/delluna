export const name="plus-square-duotone";
export const id="dl_8c54768d52ea4e2a8564";
export const url=new URL("../icons/plus-square-duotone.svg?v=72af6398ee2cfa22dd32d2a2dcc4131d030ebb9feba8ffbc39d366b235ab4725",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
