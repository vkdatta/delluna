export const name="gamepad_left-fill";
export const id="dl_4658d80d41d94ba5abea";
export const url=new URL("../icons/G/gamepad_left-fill.svg?v=61dff223edb1dcf73598339d9aa0be34cc8a2eaa999f5d9a657b95b0b32b7c59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
