export const name="gamepad_circle_left-fill";
export const id="dl_99c59d142bee8980cbc2";
export const url=new URL("../icons/gamepad_circle_left-fill.svg?v=251d8cef0eb1ffc4426ecb201a8264d29e9ef7ec77509dac5ba4750ea858c717",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
