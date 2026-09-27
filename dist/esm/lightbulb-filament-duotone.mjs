export const name="lightbulb-filament-duotone";
export const id="dl_f12433efbf0b47ceb133";
export const url=new URL("../icons/lightbulb-filament-duotone.svg?v=136a32aedf3e24557e4c4407c217d3e9de2140da3a2269627659d24c0e2c7964",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
