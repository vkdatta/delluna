export const name="user-round-x";
export const id="dl_c8c612b1942f4e649a8d";
export const url=new URL("../icons/user-round-x.svg?v=0b294f3420957b0f399ca18652ea761f356377b0b0bc67adc79fc927a08b3a22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
