export const name="rows-plus-top-duotone";
export const id="dl_4177b4031cb04db3a92d";
export const url=new URL("../icons/rows-plus-top-duotone.svg?v=a2b793aed2df907b3655888a4a915d0e7059f8347eb73f7594afb6e4bd20a68b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
