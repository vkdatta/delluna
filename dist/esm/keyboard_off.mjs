export const name="keyboard_off";
export const id="dl_776fab474d2cb5b45b10";
export const url=new URL("../icons/keyboard_off.svg?v=4600fe3f0cd5096f5cf6480dce1d8677de3a663158cbfacad226c8bcc5630132",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
