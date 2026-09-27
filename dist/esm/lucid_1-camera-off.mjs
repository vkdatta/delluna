export const name="lucid_1-camera-off";
export const id="dl_78ddd291385e49efa659";
export const url=new URL("../icons/lucid_1-camera-off.svg?v=956a6724bfd4268fc43e13844cb341020c4d29bd03667d88a633e67a9bdeb9cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
