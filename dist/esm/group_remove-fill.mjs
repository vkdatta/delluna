export const name="group_remove-fill";
export const id="dl_88e8ce0b45b12c164c4e";
export const url=new URL("../icons/group_remove-fill.svg?v=bf9d98c94489679d6d7b1c133fbe242af575ba297ee5222b1264fab928f50f78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
