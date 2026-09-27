export const name="screenshot_keyboard";
export const id="dl_729b083db92b0530239f";
export const url=new URL("../icons/screenshot_keyboard.svg?v=87545f4214434ed2f2dac68f341a85ebfe225a2402b4558a74b3b2d9c1479b7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
