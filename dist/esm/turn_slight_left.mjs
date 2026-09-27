export const name="turn_slight_left";
export const id="dl_902d2717537caea8793b";
export const url=new URL("../icons/turn_slight_left.svg?v=3dce0877bb615f8bb3e4842afb8013e82ccfb0957fb82f569789b3e1c04b9a79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
