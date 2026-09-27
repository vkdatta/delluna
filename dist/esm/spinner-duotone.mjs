export const name="spinner-duotone";
export const id="dl_745c30667a86ad66e4d6";
export const url=new URL("../icons/spinner-duotone.svg?v=90c74d244602c70d4ccff711745474f26fa63f2125089d8c9120ad3d3b111f2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
