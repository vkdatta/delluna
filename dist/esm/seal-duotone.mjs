export const name="seal-duotone";
export const id="dl_32beedc9797243fe86b7";
export const url=new URL("../icons/S/seal-duotone.svg?v=b4b6255ae5c66a7315f037b0eb9655e2617adb056413fca5ee1b62f705d3261e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
