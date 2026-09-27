export const name="keyboard_command_key-fill";
export const id="dl_1ebf445f118b3f1d96d2";
export const url=new URL("../icons/keyboard_command_key-fill.svg?v=c3f004a3637903b53c27bc64e00649af3c1e33753cbb8d24cb06cdd5f4be39cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
