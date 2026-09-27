export const name="keyboard_command_key-fill";
export const id="dl_6cc02869df0fc41c5915";
export const url=new URL("../icons/keyboard_command_key-fill.svg?v=e144048a5f3519424767d44b8eb75672e7d03751bf553c9d2034c56f8e225015",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
