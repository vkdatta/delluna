export const name="card_membership-fill";
export const id="dl_f5da389ee109dde65c0c";
export const url=new URL("../icons/card_membership-fill.svg?v=ec5c4c2b65e996b9a887bb0ea5191c923083cb348f79e10ca322c7641ec5478d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
