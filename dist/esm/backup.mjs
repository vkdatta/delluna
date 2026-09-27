export const name="backup";
export const id="dl_8f9be8196c48dc0ebf66";
export const url=new URL("../icons/backup.svg?v=5d0593da4d6fb46855151e04d545b2ed79e01f725b7a795b00daeab7ccfd4dcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
