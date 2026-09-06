export const name="rows-plus-top-duotone";
export const id="dl_4177b4031cb04db3a92d";
export const url=new URL("../icons/rows-plus-top-duotone.svg?v=f04aca6424d171b30f68bac5a667c442e9e646bf9c2925749f6c79a139e15f4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
