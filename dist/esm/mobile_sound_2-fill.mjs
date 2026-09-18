export const name="mobile_sound_2-fill";
export const id="dl_cd7bc80d9e924d6dac46";
export const url=new URL("../icons/M/mobile_sound_2-fill.svg?v=7fca811bee3da424115d1c9c4acf7267581941d8cc4f33fa86ada662cb317298",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
