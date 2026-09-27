export const name="dribbble-logo-duotone";
export const id="dl_67cb0bbf9ff3460c9901";
export const url=new URL("../icons/dribbble-logo-duotone.svg?v=ed165c50895b7b830a2360e0d5ab73a327ac3da1aeaf66f292abb4c8ed007542",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
