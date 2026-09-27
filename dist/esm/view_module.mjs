export const name="view_module";
export const id="dl_1882fbb3ca9a0b97aad4";
export const url=new URL("../icons/view_module.svg?v=5a555165c98419f29e85a62f3a8af7f2de044832b6cc14b9e5a1efb4ea074dc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
