export const name="gamepad_circle_right-fill";
export const id="dl_12502b5559ee2fb6b58e";
export const url=new URL("../icons/gamepad_circle_right-fill.svg?v=1616459991115d36544595bc6faa429d8ec9a9996a8d555f9a0ac51c665c9e4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
