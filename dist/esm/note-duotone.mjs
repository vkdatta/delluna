export const name="note-duotone";
export const id="dl_1e792129808641cda2eb";
export const url=new URL("../icons/note-duotone.svg?v=cad11f6157c6483034d341d7fdd0799cc8c54f497d72e64fc90e24fc45d35459",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
