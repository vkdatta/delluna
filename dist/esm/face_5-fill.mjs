export const name="face_5-fill";
export const id="dl_0cbf155b18920729993c";
export const url=new URL("../icons/face_5-fill.svg?v=b1a943c794b6163e47e5f75457b0288c2cd04fb49c16c6c20549d5e52cae889d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
