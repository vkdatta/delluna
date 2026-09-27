export const name="hdr_strong-fill";
export const id="dl_13792f69c40d0d8cec87";
export const url=new URL("../icons/hdr_strong-fill.svg?v=da2dede02737c97e80102cdc488b3155edab3dc62959804416694fe221a29bfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
