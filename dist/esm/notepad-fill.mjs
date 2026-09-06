export const name="notepad-fill";
export const id="dl_e84b1dee0eab4a0abda8";
export const url=new URL("../icons/notepad-fill.svg?v=f69e0b1b5db2cefc625b4430c04debe8b6e65c238698eb29729e0b5132be72a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
