export const name="touchpad_mouse_off-fill";
export const id="dl_59162bf715c24bb585f7";
export const url=new URL("../icons/touchpad_mouse_off-fill.svg?v=e3a6346d6cf4ce73e60e8b3ded940dd5d46cbfadbc6af01c82753ac02919d22e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
