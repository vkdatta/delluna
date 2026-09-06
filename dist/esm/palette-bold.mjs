export const name="palette-bold";
export const id="dl_63ae6b4bafb94efea878";
export const url=new URL("../icons/palette-bold.svg?v=e178c6c05ec0abd053cc2d6e2eafa0a67ccee9fdafba5c6a598dd54ce5c18ab8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
