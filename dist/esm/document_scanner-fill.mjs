export const name="document_scanner-fill";
export const id="dl_b5cefb5d85dac0ff0dcc";
export const url=new URL("../icons/document_scanner-fill.svg?v=e7d436c1aaf2c1498a34379fc264a8c68e2c2384052b38514a214910b018407a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
