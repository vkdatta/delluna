export const name="volume_up-fill";
export const id="dl_bef66d8ab9da9a20f2e9";
export const url=new URL("../icons/volume_up-fill.svg?v=57f54f07b1dfbb7ab209ba1c060a296096296d715236b2a6aa057f969f452a0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
