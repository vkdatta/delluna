export const name="lightbulb-filament-duotone";
export const id="dl_f12433efbf0b47ceb133";
export const url=new URL("../icons/lightbulb-filament-duotone.svg?v=0a7201f893cab2e0b5f8670e5c87edb818fc405951cbfc82a5d61c03a7efc209",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
