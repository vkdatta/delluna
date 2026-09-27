export const name="gamepad-fill";
export const id="dl_a03bb116cbe5e4e9d271";
export const url=new URL("../icons/gamepad-fill.svg?v=8d88310782c5297fc7e5bf1f6bb711a8b8d57a1f742f5c7c142393a24546eb46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
