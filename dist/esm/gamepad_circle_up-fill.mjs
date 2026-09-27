export const name="gamepad_circle_up-fill";
export const id="dl_0ab6d0a0e2bb7f92f4d0";
export const url=new URL("../icons/gamepad_circle_up-fill.svg?v=7244728185610858946f04587e4e889c39371c3be7fe90f24aa48241b2a98af0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
