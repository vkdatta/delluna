export const name="sheets_rtl";
export const id="dl_13452c20eeb1558479bd";
export const url=new URL("../icons/sheets_rtl.svg?v=caf75c7d62c4e1ca05caae0179613b7f054b14a09bc736064cccf826829e6fb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
