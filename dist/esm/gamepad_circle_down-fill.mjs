export const name="gamepad_circle_down-fill";
export const id="dl_a12d54a1910fbfefd15b";
export const url=new URL("../icons/gamepad_circle_down-fill.svg?v=db418cf67e82c2ff7c4388e59b1c60e456f9d47aea798435e6aec79450c160d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
