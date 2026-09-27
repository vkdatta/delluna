export const name="database_upload-fill";
export const id="dl_577762a930fc8a7a22f7";
export const url=new URL("../icons/database_upload-fill.svg?v=4f894a4fd02fb01b358ee0094e6f07ae0a4753f1072da1258281c7889babf314",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
