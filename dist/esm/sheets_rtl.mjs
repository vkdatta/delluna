export const name="sheets_rtl";
export const id="dl_e0e0e86dafa445a49f0a";
export const url=new URL("../icons/S/sheets_rtl.svg?v=8a3f41771252aeba678330d628c35ed4a3b852876756861a7a6671c959c19d2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
