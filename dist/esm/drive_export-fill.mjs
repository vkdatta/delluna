export const name="drive_export-fill";
export const id="dl_0ae6304759ab61032284";
export const url=new URL("../icons/drive_export-fill.svg?v=e898cc57df29e35a9f83ddbec49d76ec1364fb5e1f7501f466c08e458020455a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
