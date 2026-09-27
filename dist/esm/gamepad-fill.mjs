export const name="gamepad-fill";
export const id="dl_9f788d511a03e0cbc346";
export const url=new URL("../icons/gamepad-fill.svg?v=cfba7787d2b1c5d2ba729393c0d9164e10f74885920308b3a69ee162d3698e83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
