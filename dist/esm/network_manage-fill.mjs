export const name="network_manage-fill";
export const id="dl_31f30e70635e454c927d";
export const url=new URL("../icons/N/network_manage-fill.svg?v=05cd0e77557d0815ff2fc141490f79dff8140e0c0aa640ba64de3eba4773a1cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
