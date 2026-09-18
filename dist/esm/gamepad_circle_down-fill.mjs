export const name="gamepad_circle_down-fill";
export const id="dl_e211620649bb44e6b858";
export const url=new URL("../icons/gamepad_circle_down-fill.svg?v=bdb862af0f3f8b7148da1c05c215ac68c2cec20104e33ea0b84ba540ab1d27c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
