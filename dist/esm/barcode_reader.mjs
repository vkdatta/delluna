export const name="barcode_reader";
export const id="dl_36cf84e2ae044d779c2d";
export const url=new URL("../icons/B/barcode_reader.svg?v=e227607748e7d853474fb4ff44bd2bb585df6520f853595aae7bd5563ea5b7f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
