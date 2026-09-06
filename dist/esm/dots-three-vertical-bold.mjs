export const name="dots-three-vertical-bold";
export const id="dl_72ddc849b2f143c9a30b";
export const url=new URL("../icons/dots-three-vertical-bold.svg?v=4bb50d6e3099a6599b8800303a2f457954ad557213554761df79ee61b5aa7b9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
