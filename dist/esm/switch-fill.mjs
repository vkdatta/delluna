export const name="switch-fill";
export const id="dl_ba8b192cd26f83bd50f3";
export const url=new URL("../icons/switch-fill.svg?v=ad94990cbc6ef2456ad12cc00783f4f115dcec75043c9b218d5ca412a68aedc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
