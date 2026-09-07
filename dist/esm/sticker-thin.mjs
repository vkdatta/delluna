export const name="sticker-thin";
export const id="dl_a34d5a9c401e43259a67";
export const url=new URL("../icons/S/sticker-thin.svg?v=0da8a3cd2765765ac43e389752f785e3cec7b1ca0cff221fb3104dd27ae7b300",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
