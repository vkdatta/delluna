export const name="type_specimen-fill";
export const id="dl_4624c7a79995337ffd9b";
export const url=new URL("../icons/type_specimen-fill.svg?v=e5aca7250fa5f5946970d3c0544c481d5a8da1af03c9d7c91edc368129aebf9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
