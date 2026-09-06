export const name="dribbble-logo-bold";
export const id="dl_d7989dbd8d764172b164";
export const url=new URL("../icons/dribbble-logo-bold.svg?v=a666c472efddb96c4f643d2373bef77375565e95bf6aa1d8b705d48417d792d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
