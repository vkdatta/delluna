export const name="barcode_reader-fill";
export const id="dl_ad861b0f06a6dec0477f";
export const url=new URL("../icons/barcode_reader-fill.svg?v=dd03649abcddd07c5b91ac706536e9be034daafb1f203f662a19c623fc893e76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
