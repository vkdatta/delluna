export const name="mobile_arrow_right-fill";
export const id="dl_9c714ca44195d9a8a761";
export const url=new URL("../icons/mobile_arrow_right-fill.svg?v=3f4902b80136e3fef91b32e30d64faf968e53d4b0f589e6859e4ae4a52f00b82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
