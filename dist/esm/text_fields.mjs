export const name="text_fields";
export const id="dl_948b3b2c74c2ebf1f866";
export const url=new URL("../icons/text_fields.svg?v=25e5818cf3b5688129bbb6b68058f357c943192e49651119b8d06a723221bae6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
