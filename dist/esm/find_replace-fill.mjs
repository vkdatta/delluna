export const name="find_replace-fill";
export const id="dl_f17ae4ab5e1306161456";
export const url=new URL("../icons/find_replace-fill.svg?v=745605875017e1937ed8b1963b532a200b9c5d5d537625c47e664c70aa9fa20e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
