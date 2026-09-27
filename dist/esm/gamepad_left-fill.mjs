export const name="gamepad_left-fill";
export const id="dl_c0d57b7ad41a64c505e3";
export const url=new URL("../icons/gamepad_left-fill.svg?v=a127791114cf97e4b0a4ca91e0c7e6036be0f5bf7dfe331785f6f224497d98e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
