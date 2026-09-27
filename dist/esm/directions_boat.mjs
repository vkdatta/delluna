export const name="directions_boat";
export const id="dl_5fc047857682d89a21ba";
export const url=new URL("../icons/directions_boat.svg?v=1ae683fec47e6708a20a85a8172ed4217a7cf83021a25b415d2614051bf34cc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
