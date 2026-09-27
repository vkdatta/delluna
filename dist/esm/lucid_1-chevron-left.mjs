export const name="lucid_1-chevron-left";
export const id="dl_119c47630100449f8401";
export const url=new URL("../icons/lucid_1-chevron-left.svg?v=a1dcfb220236b8f4e14e769bf68671417668e25233f1983057f266b2663fd3ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
