export const name="wallpaper-fill";
export const id="dl_b4c390eb655240109a73";
export const url=new URL("../icons/wallpaper-fill.svg?v=42cfe1051f4a5dab55cb340a93998dc86c6e74f5d4fca4220ad1911c8d4bbd6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
