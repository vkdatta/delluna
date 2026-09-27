export const name="keyboard_full-fill";
export const id="dl_e0fa9c593f7aee6f7e46";
export const url=new URL("../icons/keyboard_full-fill.svg?v=2ced0fb80f6c6d7e599d6f0038fb94de8b8519db5c69ee0b05aef29906daa31d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
