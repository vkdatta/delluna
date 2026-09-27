export const name="gamepad_circle_left-fill";
export const id="dl_8d7aa6a389a725f81056";
export const url=new URL("../icons/gamepad_circle_left-fill.svg?v=738a2bb97e06cd8eb70675bf8f6ca78db1f13549fd60db179bb07ca642177fce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
