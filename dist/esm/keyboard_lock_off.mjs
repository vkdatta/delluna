export const name="keyboard_lock_off";
export const id="dl_47dfaba558f4e060d4b0";
export const url=new URL("../icons/keyboard_lock_off.svg?v=4fb74aafe1ce7ea8a2627663216d5acf8566fd8f1467fd3a1303a9432d904536",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
