export const name="drive_export-fill";
export const id="dl_1b8b60d0623df3e97292";
export const url=new URL("../icons/drive_export-fill.svg?v=38b724be65e65574482b97ac64fe4b83efad372071a4cf48f9755279bb0f33ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
