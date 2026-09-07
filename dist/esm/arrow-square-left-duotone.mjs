export const name="arrow-square-left-duotone";
export const id="dl_c96aeb52a4be49519b57";
export const url=new URL("../icons/arrow-square-left-duotone.svg?v=a3ce6321c7cf6216e435561d91e01d8a1ee39b4935e57dcdde2a91f3012261a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
