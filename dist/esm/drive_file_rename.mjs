export const name="drive_file_rename";
export const id="dl_3b6494e2eb02261dd251";
export const url=new URL("../icons/drive_file_rename.svg?v=e04ff0f1be7a90a2f45cb5737c077adae6f58098359c2701badfc919fdc8bc2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
