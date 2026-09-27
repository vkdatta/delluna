export const name="wave-triangle-bold";
export const id="dl_b1046fce1d7058e22d8e";
export const url=new URL("../icons/wave-triangle-bold.svg?v=d3805263c995ef23f672ad3e80f6e7d9b0bc6f382241fc08114afcc4a7363b8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
