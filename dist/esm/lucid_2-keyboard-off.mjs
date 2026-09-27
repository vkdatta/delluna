export const name="lucid_2-keyboard-off";
export const id="dl_023e218b04a84cd38f16";
export const url=new URL("../icons/lucid_2-keyboard-off.svg?v=755728a21d3258dc2408106133247736682c2ff8abafacbfcee8a8ecff5a527a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
