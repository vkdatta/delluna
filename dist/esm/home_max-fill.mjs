export const name="home_max-fill";
export const id="dl_6d848938007d8868cf85";
export const url=new URL("../icons/home_max-fill.svg?v=062166daab2a406714409cc6856158c72655aa84e61837966b32c549719a83e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
