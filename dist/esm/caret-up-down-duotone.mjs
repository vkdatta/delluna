export const name="caret-up-down-duotone";
export const id="dl_65293ff33c014d8687ac";
export const url=new URL("../icons/caret-up-down-duotone.svg?v=1a677de1deb759c584c8be21b65ba22974303e59d3bfe2925240f4de8f4c87a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
