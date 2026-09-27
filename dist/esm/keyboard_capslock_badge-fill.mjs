export const name="keyboard_capslock_badge-fill";
export const id="dl_6e9f4d6d1c45fd15ce40";
export const url=new URL("../icons/keyboard_capslock_badge-fill.svg?v=95afe5f1ed7116dbb685040e475ca603a2eac069aa765aef8e338264fb392835",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
