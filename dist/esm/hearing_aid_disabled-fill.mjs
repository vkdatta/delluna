export const name="hearing_aid_disabled-fill";
export const id="dl_b961af28a15b4df69313";
export const url=new URL("../icons/hearing_aid_disabled-fill.svg?v=be8a083fb0a839fff42e13e016f5b41f8d8d33fa79ae402b8c6da05ce0556522",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
