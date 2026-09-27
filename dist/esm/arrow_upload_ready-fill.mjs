export const name="arrow_upload_ready-fill";
export const id="dl_fd41d54a2e453688aa70";
export const url=new URL("../icons/arrow_upload_ready-fill.svg?v=b0acc2e3c27ad322a868ff442a1a6feff485cd76512570b7853f00e6e55c7b64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
