export const name="gamepad_circle_up-fill";
export const id="dl_0fd2920376244a8d90a1";
export const url=new URL("../icons/gamepad_circle_up-fill.svg?v=376e1bae477563e025921d55ab4ec6f7e33abf179490e771acc8fa8b4ca37f59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
