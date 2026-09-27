export const name="battery-plus-duotone";
export const id="dl_3b168784a47c4c368867";
export const url=new URL("../icons/battery-plus-duotone.svg?v=5c1f37a3d2792fc0a10094cb09ad523117b1d081f021c8821682925355bc7814",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
