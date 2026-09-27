export const name="clipboard-fill";
export const id="dl_0f12366da42344938b52";
export const url=new URL("../icons/clipboard-fill.svg?v=4919b82621b0b46e04fed5ac617cccbad191d985dc553c2a1548f87fd7f564f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
