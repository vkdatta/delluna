export const name="keyboard_full-fill";
export const id="dl_9df5038c68df4eef9fd6";
export const url=new URL("../icons/keyboard_full-fill.svg?v=13b5d52563c1879ba33d9a15efe42135e038ace37007a2c2b87442076954655c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
