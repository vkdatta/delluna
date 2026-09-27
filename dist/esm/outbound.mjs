export const name="outbound";
export const id="dl_2185705d496d95842156";
export const url=new URL("../icons/outbound.svg?v=efc0689740defe2557e408f37c848784af41f4ba23c94ef3fba0554f794fa57c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
