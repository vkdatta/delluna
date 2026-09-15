export const name="floor_lamp-fill";
export const id="dl_7587ee05fb9041f28fd4";
export const url=new URL("../icons/F/floor_lamp-fill.svg?v=8a280f400172cf22ec459fca082e02ec98b3519692d8748579a9a6ccf2085316",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
