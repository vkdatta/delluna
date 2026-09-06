export const name="battery-plus-vertical-duotone";
export const id="dl_72a29c5ac40d4285ac40";
export const url=new URL("../icons/battery-plus-vertical-duotone.svg?v=4fa795b7047df514219aa6607ce048bf999fec1eddf5337dd11ebdea7d47bc55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
