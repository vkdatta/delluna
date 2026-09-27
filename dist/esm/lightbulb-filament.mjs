export const name="lightbulb-filament";
export const id="dl_4da6dfe3acf342dd9b80";
export const url=new URL("../icons/lightbulb-filament.svg?v=c03b4fb5b405cba26fdff680f95449e92731cbcf2b7b8dc46fa6cec2cc6b7526",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
