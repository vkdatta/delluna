export const name="shades";
export const id="dl_bab08deedf1844eab1db";
export const url=new URL("../icons/shades.svg?v=570dc3f52f559317183960c7f2c59c8d70bc8cc933a1a4f5ec8178382a2ef795",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
