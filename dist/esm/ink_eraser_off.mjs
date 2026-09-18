export const name="ink_eraser_off";
export const id="dl_e2db7bffd63644d68506";
export const url=new URL("../icons/ink_eraser_off.svg?v=5fa5bebd8dc63b67c04b41a1ec916e70aee6841f354031f1b713c9156b7ca796",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
