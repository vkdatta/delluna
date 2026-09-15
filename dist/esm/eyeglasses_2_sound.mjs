export const name="eyeglasses_2_sound";
export const id="dl_cc315f4a587348d5aa62";
export const url=new URL("../icons/E/eyeglasses_2_sound.svg?v=440a971545102213058a8ab83cfd187f382b46b5ab2a3bbc90e2d4d194b167d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
