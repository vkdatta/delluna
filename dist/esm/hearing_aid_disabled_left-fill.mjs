export const name="hearing_aid_disabled_left-fill";
export const id="dl_8c8380fa45de588cfae1";
export const url=new URL("../icons/hearing_aid_disabled_left-fill.svg?v=0cf8081c4ac47175b38728a0a3fe969ecd8f7a8f9f1525238f311e9fb99febe3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
