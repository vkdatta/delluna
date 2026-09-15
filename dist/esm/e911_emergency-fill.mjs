export const name="e911_emergency-fill";
export const id="dl_47325b6bcc6642bc9a4d";
export const url=new URL("../icons/E/e911_emergency-fill.svg?v=14ae7019099fd49b5d96e1b2ac329daaf338851a3dde0ac11a91c8ea7b100480",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
