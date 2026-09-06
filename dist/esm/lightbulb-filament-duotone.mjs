export const name="lightbulb-filament-duotone";
export const id="dl_f12433efbf0b47ceb133";
export const url=new URL("../icons/lightbulb-filament-duotone.svg?v=914c449a6475a639dd37a4908ed7559603b914c2834d0796a173712cd63f4975",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
