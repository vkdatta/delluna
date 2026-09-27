export const name="event_repeat-fill";
export const id="dl_c8373ff206a8c93269bc";
export const url=new URL("../icons/event_repeat-fill.svg?v=37ce654e86f0b87e4858f0a05d1242eff1a357c1b943ecfb2077be5724b9e4d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
