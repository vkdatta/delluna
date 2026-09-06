export const name="hand-coins-light";
export const id="dl_6bb1fc33b08441d4b5e2";
export const url=new URL("../icons/hand-coins-light.svg?v=80065448a36919542c47972cfc66bf9ab3ad7afdc75623eb19262748470918a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
