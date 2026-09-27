export const name="keyboard_external_input";
export const id="dl_7ad88d71e7afb872566b";
export const url=new URL("../icons/keyboard_external_input.svg?v=0f1825d9502531845952b982f3563c62bfce7135e4fbfc24467a56646dcb0c55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
