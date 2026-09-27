export const name="crop_9_16-fill";
export const id="dl_08233e982a4accb19d48";
export const url=new URL("../icons/crop_9_16-fill.svg?v=b7b165300f1a05004bea15ad95bcfda7b4d47e19e13c8c5d84640ffadeb0309f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
