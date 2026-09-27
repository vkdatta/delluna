export const name="paperclip-horizontal-duotone";
export const id="dl_af95cfc548d34bebb0d3";
export const url=new URL("../icons/paperclip-horizontal-duotone.svg?v=dd018386e724c17b2a08ad7f508a620afa07baac6416efec56d1107879168c58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
