export const name="keyboard_arrow_down-fill";
export const id="dl_bb9937a8385cb52da4c1";
export const url=new URL("../icons/keyboard_arrow_down-fill.svg?v=375cd22593aa471ed67b188716e70cb84c0693c206f5784e9e899a95fffd38be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
