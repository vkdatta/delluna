export const name="keyboard_command_key-fill";
export const id="dl_c31a71401bb3f2a5077c";
export const url=new URL("../icons/keyboard_command_key-fill.svg?v=ef48c5fce105d8bccc237c7ad6bcbd99a95c317cc5c8b6e3b1e04aef2106600b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
