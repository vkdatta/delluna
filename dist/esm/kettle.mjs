export const name="kettle";
export const id="dl_df73c81c9b5548f2b83e";
export const url=new URL("../icons/K/kettle.svg?v=087d1ad09f9a199ec835c4f7e4616d341fea4f05b5a099bc343892037589a9a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
