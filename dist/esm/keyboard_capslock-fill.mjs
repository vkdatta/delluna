export const name="keyboard_capslock-fill";
export const id="dl_e3be64067a314577d41a";
export const url=new URL("../icons/keyboard_capslock-fill.svg?v=0529ba50ea22d5c7f0eb337af7f556786712cb81887e29d6d49f8c929ef94dfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
