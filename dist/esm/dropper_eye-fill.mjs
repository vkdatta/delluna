export const name="dropper_eye-fill";
export const id="dl_a2d8c20cc3a138156e48";
export const url=new URL("../icons/dropper_eye-fill.svg?v=2a61464dc9f53de340f7daf7cb75f13c78b9ed2c9bdf80b7439f096a3711ea0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
