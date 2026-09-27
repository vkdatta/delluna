export const name="lucid_2-joystick";
export const id="dl_2e3a043c44bd4ae6b503";
export const url=new URL("../icons/lucid_2-joystick.svg?v=a32f4340bea6ba7d1b86a8f633ee21194fa5da4c90babb9b38f467a00b66af70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
