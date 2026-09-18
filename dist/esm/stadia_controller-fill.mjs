export const name="stadia_controller-fill";
export const id="dl_1242a8b9610e47cab851";
export const url=new URL("../icons/S/stadia_controller-fill.svg?v=da8c8f78564984eb642819d07913bf50899e1b52faab8a7ea2fba61a6dc01570",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
