export const name="insert_text";
export const id="dl_4d38786ef730ad4f9a1f";
export const url=new URL("../icons/insert_text.svg?v=d422effa1784bfe0179a780e31345db7510ecbc2fc40b7d84862c9024bb9fedb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
