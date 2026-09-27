export const name="lucid_2-gamepad";
export const id="dl_e8324d7244e2415fab5a";
export const url=new URL("../icons/lucid_2-gamepad.svg?v=fb664599e9d601c56b8ad30354b8b61604b6fa245f688269f59df576acdd6fd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
