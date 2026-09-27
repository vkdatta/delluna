export const name="lucid_2-gamepad";
export const id="dl_e8324d7244e2415fab5a";
export const url=new URL("../icons/lucid_2-gamepad.svg?v=cd29dabe5ce03c6347d984a90789d4f726d41e03b32f453ff2ea6667e96b16cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
