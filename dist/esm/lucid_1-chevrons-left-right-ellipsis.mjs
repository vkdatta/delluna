export const name="lucid_1-chevrons-left-right-ellipsis";
export const id="dl_66dfad4ff0724e80a58e";
export const url=new URL("../icons/lucid_1-chevrons-left-right-ellipsis.svg?v=df3886d34bf20a28c77e144eff468f354358aa36da85bf83c9f2eb393a648a9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
