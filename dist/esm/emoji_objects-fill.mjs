export const name="emoji_objects-fill";
export const id="dl_8da094f8e0014b509562";
export const url=new URL("../icons/E/emoji_objects-fill.svg?v=59fe383a968101ad4bef54fae8561c58527a7716127aaf11ac533bdcbec9b9d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
