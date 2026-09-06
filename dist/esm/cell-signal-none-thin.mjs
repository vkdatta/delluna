export const name="cell-signal-none-thin";
export const id="dl_5ea1876f1f384654a583";
export const url=new URL("../icons/cell-signal-none-thin.svg?v=0b0641af8f6bb1e84b0b3eefd4ae9a4df454bcf551cea1c4b8fa23511b445af5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
