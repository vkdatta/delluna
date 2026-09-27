export const name="triangle-dashed-fill";
export const id="dl_c5d262d9eac3fbf91854";
export const url=new URL("../icons/triangle-dashed-fill.svg?v=489cb6652b829d70a2ddc848116dbf9cadc7ecae0ea110e8632c392b8e4db0ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
