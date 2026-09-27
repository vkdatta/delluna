export const name="mode_standby-fill";
export const id="dl_e696bc89a81a3d327ac6";
export const url=new URL("../icons/mode_standby-fill.svg?v=1e3362e9037681990aec1d6dd3101aba6a01ef44f74511343cae58a04248dd2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
