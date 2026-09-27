export const name="desktop_windows";
export const id="dl_454d181b7f3a28ba1fe7";
export const url=new URL("../icons/desktop_windows.svg?v=9c96b8a47ae91cc47b1f435f5a02d98473ff0692d9fd93603a9f8e14843979b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
