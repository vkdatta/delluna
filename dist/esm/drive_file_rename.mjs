export const name="drive_file_rename";
export const id="dl_34e00b15e9a34e00aa8b";
export const url=new URL("../icons/D/drive_file_rename.svg?v=a30b19017b53710ea6b587328289d534a227d64622d56474e8f1f38dd098b2e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
