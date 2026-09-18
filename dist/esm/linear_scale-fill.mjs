export const name="linear_scale-fill";
export const id="dl_1416bab089544cc0ad29";
export const url=new URL("../icons/L/linear_scale-fill.svg?v=0d78a37fe216958cec03a1ea700900ca083d0c96de22e2fa25a56fbee8982a4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
