export const name="align_justify_center-fill";
export const id="dl_6fb2a19cdb6cb1a00926";
export const url=new URL("../icons/align_justify_center-fill.svg?v=ada25950d53998156c1ae8a28594396b0be28ef459791ce315ef33203ff57b4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
