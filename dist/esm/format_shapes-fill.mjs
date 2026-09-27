export const name="format_shapes-fill";
export const id="dl_952260cdc5f3a2fbe1a2";
export const url=new URL("../icons/format_shapes-fill.svg?v=9732b6201653869c2c1c303518f1ea5d8bfeef7fa63515219b2bbc4c5b3aa459",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
