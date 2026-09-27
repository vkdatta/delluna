export const name="hard_drive_2-fill";
export const id="dl_0ef3ff32c787751a14c6";
export const url=new URL("../icons/hard_drive_2-fill.svg?v=2a5451928618a5f445ebaad0478edd427d379f4e0f91a3b5e10cd7ed91308f40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
