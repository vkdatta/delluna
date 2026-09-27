export const name="gamepad_down-fill";
export const id="dl_4220201c27570e25e347";
export const url=new URL("../icons/gamepad_down-fill.svg?v=8e869c346c84978694eea5d5bde9e915b62992c6171837768800ac2ddfbb84d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
