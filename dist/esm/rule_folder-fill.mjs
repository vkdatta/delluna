export const name="rule_folder-fill";
export const id="dl_95aa01ec9e5f2f51b693";
export const url=new URL("../icons/rule_folder-fill.svg?v=71898ee0492ae0fcba63e5b184598b3974a5e4acb1c20fbbe080e62ab1d6590d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
