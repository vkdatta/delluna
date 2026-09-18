export const name="gamepad_up-fill";
export const id="dl_5f8e65284da948b1be2f";
export const url=new URL("../icons/gamepad_up-fill.svg?v=a97b3471af8e686fd4a44cfb873c163e3a74f807c35056e46b08611433cde850",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
