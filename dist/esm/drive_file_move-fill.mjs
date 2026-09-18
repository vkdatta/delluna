export const name="drive_file_move-fill";
export const id="dl_af4f9e7e85944236864a";
export const url=new URL("../icons/drive_file_move-fill.svg?v=3785ab9b49258798bf3d91fcc2b0d555b4954ac70b39bc4dc864741faf1f1c91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
