export const name="adf_scanner";
export const id="dl_1e48f5e1ae9f516175fb";
export const url=new URL("../icons/adf_scanner.svg?v=889049608b1c486f02f71f7f2a860d34508be5efabc12c8cdc2265a7e71f0d9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
