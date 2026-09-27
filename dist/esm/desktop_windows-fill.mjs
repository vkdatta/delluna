export const name="desktop_windows-fill";
export const id="dl_ed89f69b3947c5d5d82b";
export const url=new URL("../icons/desktop_windows-fill.svg?v=b9e9c6685c4d683cd12d22fa3fb8c691c53a8af4e659c5a035fa6afaf07298f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
