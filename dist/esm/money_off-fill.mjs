export const name="money_off-fill";
export const id="dl_7e06974bcb2d7ca09532";
export const url=new URL("../icons/money_off-fill.svg?v=24cb33ca1ab2d27eca5ebfaa44ff92249d27361ec1667a0f008690d2e38d0f8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
