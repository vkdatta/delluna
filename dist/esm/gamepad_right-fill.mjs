export const name="gamepad_right-fill";
export const id="dl_1299f4318b3d17c1fbc3";
export const url=new URL("../icons/gamepad_right-fill.svg?v=1cfcadd01fd15dca8df7e9245b3dbfe917ad53b297b8313f774019af58bb7bf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
