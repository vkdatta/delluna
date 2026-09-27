export const name="minus-duotone";
export const id="dl_dd399fb72ee84a7aa32a";
export const url=new URL("../icons/minus-duotone.svg?v=26fcdcda9f58ae8c64e1345230244bc93f36408e97bb0b233f6202735319d169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
