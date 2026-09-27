export const name="lucid_3-message-circle";
export const id="dl_690a9ea7380c4e7d8614";
export const url=new URL("../icons/lucid_3-message-circle.svg?v=516d4adb3159b1b0de21a071d331599f5a3c0b32e27d86f0582ae75576d4a5ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
