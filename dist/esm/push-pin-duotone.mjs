export const name="push-pin-duotone";
export const id="dl_31a21606006a49d4a50e";
export const url=new URL("../icons/push-pin-duotone.svg?v=b72af6383d88b0be1685839c2a7f0799636c43dbc18defaa07da4058b96f8c14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
