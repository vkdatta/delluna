export const name="fish-fill";
export const id="dl_406c517898604bc493dd";
export const url=new URL("../icons/fish-fill.svg?v=292791230553f517bd10a26437ce3469f4a7fda2c91f7082dc5eef62e1dddf21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
