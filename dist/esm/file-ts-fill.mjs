export const name="file-ts-fill";
export const id="dl_00403688826744e8af0d";
export const url=new URL("../icons/file-ts-fill.svg?v=a5e6939e5f94aa65a187a3da575818ceea577345d99d5ad9ac98e95139885fea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
