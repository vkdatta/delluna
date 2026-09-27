export const name="u_turn_left-fill";
export const id="dl_e6b060f9637165fd7cd0";
export const url=new URL("../icons/u_turn_left-fill.svg?v=1c4dd19ee0ec59dd8a64bbcc34036afe2dac6c40cf7c2236ffc8ffbd41ed9698",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
