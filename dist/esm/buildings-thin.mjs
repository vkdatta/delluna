export const name="buildings-thin";
export const id="dl_0189584b5d2d4efabf13";
export const url=new URL("../icons/buildings-thin.svg?v=a82cb04cb03ea96a5e9ec5f9015746a2b222b68cf95a61f3a548cb3a9075e43a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
