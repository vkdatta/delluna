export const name="notification_multiple-fill";
export const id="dl_57a8fdc057ba4fe6bb01";
export const url=new URL("../icons/N/notification_multiple-fill.svg?v=c06898fe94db2fcdf26fa9b6fe4b13324cc354c319ab2f12a3859c44d0e968a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
