export const name="keyboard_tab-fill";
export const id="dl_0f9f09e74658df657368";
export const url=new URL("../icons/keyboard_tab-fill.svg?v=848c0d9598027c52165ba676cf698e59aa64853995732535f634a778b9911bd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
