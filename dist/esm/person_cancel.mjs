export const name="person_cancel";
export const id="dl_a6354202b118404b9215";
export const url=new URL("../icons/person_cancel.svg?v=ca64934334b7a1903fc6d2801314a9485d1ac798da748929b27bf2d64d1ddfb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
