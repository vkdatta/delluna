export const name="eyeglasses_2_sound";
export const id="dl_c19bcc4f6a3b8f948dac";
export const url=new URL("../icons/eyeglasses_2_sound.svg?v=eb393bd668c8c17b35e1f9ed0d45db7dafa8b5de7220fbe5285b477f0f47e605",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
