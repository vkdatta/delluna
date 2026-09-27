export const name="drive_file_move-fill";
export const id="dl_2ec72cd5664c2fae72ea";
export const url=new URL("../icons/drive_file_move-fill.svg?v=b69c1d60242320b3a0162b5e8fd1290ce81441154519d7f8879f2ab0b3762aac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
