export const name="translate-duotone";
export const id="dl_683082e00ca999a9b304";
export const url=new URL("../icons/translate-duotone.svg?v=e07ea24668dadb253f1a6466db526222585501d8154acfc132980ccf2babfada",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
