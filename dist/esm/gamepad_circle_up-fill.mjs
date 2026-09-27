export const name="gamepad_circle_up-fill";
export const id="dl_a5e3b8abed627d0a41bf";
export const url=new URL("../icons/gamepad_circle_up-fill.svg?v=485443ba1aa918300981ec56beb7458fa01ee8ee11d5f6b42d53cb4af5bc2a3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
