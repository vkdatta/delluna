export const name="school-fill";
export const id="dl_402fe410259f00668f7a";
export const url=new URL("../icons/school-fill.svg?v=86777e039b898f1b5825c600ffed3c128bc15cbed823e6aa40a118faecf81a9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
