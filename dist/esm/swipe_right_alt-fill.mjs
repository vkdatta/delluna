export const name="swipe_right_alt-fill";
export const id="dl_f518555d814fcf95d776";
export const url=new URL("../icons/swipe_right_alt-fill.svg?v=5cd160a82273decdb82b64e43f531fa7141e4aec417d970657cefe5b0d0b1b36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
