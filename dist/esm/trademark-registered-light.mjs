export const name="trademark-registered-light";
export const id="dl_0f83531851550dbc37cb";
export const url=new URL("../icons/trademark-registered-light.svg?v=8e5cea4f79649d692320bec55b18a942a98eabf82d1ea27cbfbc5526789f08be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
