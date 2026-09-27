export const name="restore_from_trash";
export const id="dl_03922b2dec61ab52e044";
export const url=new URL("../icons/restore_from_trash.svg?v=e612425e2caf3a935602f8ed67d4e300d92f154d548fe545c40d7c534302200a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
