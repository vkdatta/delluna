export const name="file-plus-fill";
export const id="dl_1ae9f331e17a40fc9094";
export const url=new URL("../icons/file-plus-fill.svg?v=feb3341821b59723282d406c106d741970f22374a190c76a904acd9c919ad0c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
