export const name="swipe_left_alt-fill";
export const id="dl_fe89ecd1fbd94046a29a";
export const url=new URL("../icons/S/swipe_left_alt-fill.svg?v=080313820b42ba3c885a0203faba7073ae9a1891752dcd3064695a14e49703a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
